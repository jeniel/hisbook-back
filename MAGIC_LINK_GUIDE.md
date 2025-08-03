# Magic Link User Invitation System

## Overview
This system allows you to invite users via email with a magic link that lets them complete their profile setup.

## Backend API

### 1. Invite User Mutation
```graphql
mutation InviteUser($inviteUserInput: InviteUserInput!) {
  inviteUser(inviteUserInput: $inviteUserInput) {
    message
    invitationToken
    invitationLink
  }
}
```

**Variables:**
```json
{
  "inviteUserInput": {
    "email": "newuser@example.com",
    "role": ["CLIENT_USER"],
    "departmentId": "optional-department-id",
    "tenantId": "optional-tenant-id"
  }
}
```

### 2. Complete Profile Mutation
```graphql
mutation CompleteProfile($completeProfileInput: CompleteProfileInput!) {
  completeProfile(completeProfileInput: $completeProfileInput) {
    message
    userId
    success
  }
}
```

**Variables:**
```json
{
  "completeProfileInput": {
    "token": "invitation-token-from-url",
    "firstName": "John",
    "middleName": "M",
    "lastName": "Doe",
    "password": "SecurePassword123!",
    "birthDate": "1990-01-01T00:00:00.000Z"
  }
}
```

### 3. Validate Token Query
```graphql
query ValidateInvitationToken($token: String!, $email: String!) {
  validateInvitationToken(token: $token, email: $email)
}
```

## Frontend Implementation

### 1. Admin Dashboard - Send Invitation

```typescript
// Send invitation from admin dashboard
const inviteUser = async (email: string, role: string[]) => {
  const mutation = gql`
    mutation InviteUser($inviteUserInput: InviteUserInput!) {
      inviteUser(inviteUserInput: $inviteUserInput) {
        message
        invitationToken
        invitationLink
      }
    }
  `;

  const { data } = await apolloClient.mutate({
    mutation,
    variables: {
      inviteUserInput: {
        email,
        role,
        departmentId: selectedDepartment?.id,
        tenantId: currentTenant?.id
      }
    }
  });

  console.log('Invitation sent:', data.inviteUser.message);
  return data.inviteUser;
};
```

### 2. Complete Profile Page - `/complete-profile`

```typescript
// complete-profile.tsx
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function CompleteProfile() {
  const router = useRouter();
  const { token, email } = router.query;
  const [isValidToken, setIsValidToken] = useState(false);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    birthDate: ''
  });

  // Validate token on page load
  useEffect(() => {
    if (token && email) {
      validateToken();
    }
  }, [token, email]);

  const validateToken = async () => {
    try {
      const query = gql`
        query ValidateInvitationToken($token: String!, $email: String!) {
          validateInvitationToken(token: $token, email: $email)
        }
      `;

      const { data } = await apolloClient.query({
        query,
        variables: { token, email }
      });

      setIsValidToken(data.validateInvitationToken);
    } catch (error) {
      console.error('Token validation failed:', error);
      setIsValidToken(false);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const mutation = gql`
        mutation CompleteProfile($completeProfileInput: CompleteProfileInput!) {
          completeProfile(completeProfileInput: $completeProfileInput) {
            message
            userId
            success
          }
        }
      `;

      const { data } = await apolloClient.mutate({
        mutation,
        variables: {
          completeProfileInput: {
            token: token as string,
            firstName: formData.firstName,
            middleName: formData.middleName,
            lastName: formData.lastName,
            password: formData.password,
            birthDate: formData.birthDate ? new Date(formData.birthDate).toISOString() : undefined
          }
        }
      });

      if (data.completeProfile.success) {
        alert('Profile completed successfully!');
        router.push('/login');
      }
    } catch (error) {
      console.error('Profile completion failed:', error);
      alert('Failed to complete profile. Please try again.');
    }
  };

  if (loading) {
    return <div>Validating invitation...</div>;
  }

  if (!isValidToken) {
    return (
      <div>
        <h1>Invalid or Expired Invitation</h1>
        <p>This invitation link is invalid or has expired. Please contact your administrator for a new invitation.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Complete Your Profile</h1>
      <p>Welcome! Please complete your profile to get started.</p>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name *</label>
          <input
            type="text"
            required
            value={formData.firstName}
            onChange={(e) => setFormData({...formData, firstName: e.target.value})}
          />
        </div>

        <div>
          <label>Middle Name</label>
          <input
            type="text"
            value={formData.middleName}
            onChange={(e) => setFormData({...formData, middleName: e.target.value})}
          />
        </div>

        <div>
          <label>Last Name *</label>
          <input
            type="text"
            required
            value={formData.lastName}
            onChange={(e) => setFormData({...formData, lastName: e.target.value})}
          />
        </div>

        <div>
          <label>Password *</label>
          <input
            type="password"
            required
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />
        </div>

        <div>
          <label>Confirm Password *</label>
          <input
            type="password"
            required
            value={formData.confirmPassword}
            onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
          />
        </div>

        <div>
          <label>Birth Date</label>
          <input
            type="date"
            value={formData.birthDate}
            onChange={(e) => setFormData({...formData, birthDate: e.target.value})}
          />
        </div>

        <button type="submit">Complete Profile</button>
      </form>
    </div>
  );
}
```

## Environment Variables

Make sure to set these environment variables:

```env
FRONTEND_URL=http://localhost:3000
# or your production frontend URL
```

## Flow Summary

1. **Admin sends invitation**: Use `inviteUser` mutation with user's email and role
2. **System creates user**: Creates inactive user with temporary data
3. **Email sent**: User receives invitation email with magic link
4. **User clicks link**: Redirected to `/complete-profile?token=...&email=...`
5. **Token validation**: Frontend validates token before showing form
6. **Profile completion**: User fills form and submits
7. **Account activation**: User account becomes active and can log in
8. **Welcome email**: User receives welcome email

## Security Features

- Tokens expire in 24 hours
- Tokens are hashed before storage
- Users remain inactive until profile completion
- Email validation during token validation
- Secure password hashing with Argon2

## Error Handling

- Invalid/expired tokens are properly handled
- Duplicate email validation
- Password confirmation validation
- User-friendly error messages
