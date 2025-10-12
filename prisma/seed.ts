import { PrismaClient } from '@prisma/client';
import * as argon2 from 'argon2';

const prisma = new PrismaClient();

async function main() {
  const password = await argon2.hash('34670cfafbd9');
  await prisma.user.upsert({
    where: { email: 'mis@acemcbohol.com' },
    update: {},
    create: {
      email: 'mis@acemcbohol.com',
      username: 'admin',
      hashedPassword: password,
      role: ['ADMIN'],
      profile: {
        create: {
          firstName: 'Joe Mark',
          lastName: 'Gimeno',
        },
      },
    },
  });

  // --- Seed departments ---
  const departments = [
    { name: '5A', description: '5A' },
    { name: '5B', description: '5B' },
    { name: '6A', description: '6A' },
    { name: '6B', description: '6B' },
    { name: '7A', description: '7A' },
    { name: '7B', description: '7B' },
    { name: 'ACCOUNTING', description: 'Accounting' },
    { name: 'ACUTE STROKE UNIT', description: 'Acute Stroke Unit' },
    { name: 'ADMINISTRATIVE OFFICE', description: 'Administrative Office' },
    { name: 'ADMITTING', description: 'Admitting' },
    {
      name: 'AMBULANCE AND TRANSPORTATION SERVICE',
      description: 'Ambulance And Transportation Service',
    },
    {
      name: 'AMBULATORY BLOOD PRESSURE MONITORING (ABPM)',
      description: 'Ambulatory Blood Pressure Monitoring (Abpm)',
    },
    { name: 'ANIMAL BITE CLINIC', description: 'Animal Bite Clinic' },
    { name: 'BAYVIEW DINING', description: 'Bayview Dining' },
    { name: 'BILLING', description: 'Billing' },
    { name: 'BIOMED', description: 'Biomed' },
    { name: 'BLOOD BANK', description: 'Blood Bank' },
    { name: 'BONE AND JOINT CENTER', description: 'Bone And Joint Center' },
    { name: 'BUSINESS DEVELOPMENT', description: 'Business Development' },
    { name: 'BUSINESS FINANCE', description: 'Business Finance' },
    { name: 'BUSINESS OFFICE', description: 'Business Office' },
    { name: 'CARDIOLOGY CENTER', description: 'Cardiology Center' },
    { name: 'CASHIER', description: 'Cashier' },
    { name: 'CATHLAB', description: 'Cathlab' },
    {
      name: 'CENTRAL STERILE SUPPLY ROOM',
      description: 'Central Sterile Supply Room',
    },
    { name: 'CLINICAL CHEMISTRY', description: 'Clinical Chemistry' },
    { name: 'CLINICAL LABORATORY', description: 'Clinical Laboratory' },
    { name: 'CLINICAL MICROSCOPY', description: 'Clinical Microscopy' },
    { name: 'CLINICAL PANEL', description: 'Clinical Panel' },
    { name: 'CORONARY CARE UNIT', description: 'Coronary Care Unit' },
    {
      name: 'CQI (CONTINUOS QUALITY IMPROVEMENT)',
      description: 'Cqi (Continuos Quality Improvement)',
    },
    { name: 'CS ROOM', description: 'Cs Room' },
    { name: 'CT-SCAN', description: 'Ct-Scan' },
    { name: 'DELIVERY ROOM', description: 'Delivery Room' },
    { name: 'DERMATOLOGY', description: 'Dermatology' },
    { name: 'DIETARY', description: 'Dietary' },
    { name: 'ECHOCARDIOGRAM (ECHO)', description: 'Echocardiogram (Echo)' },
    { name: 'ELECTROCARDIOGRAM (ECG)', description: 'Electrocardiogram (Ecg)' },
    { name: 'EMERGENCY ROOM', description: 'Emergency Room' },
    { name: 'ENDOSCOPY', description: 'Endoscopy' },
    {
      name: 'ENGINEERING AND MAINTENANCE',
      description: 'Engineering And Maintenance',
    },
    { name: 'EXECUTIVE CHECK UP', description: 'Executive Check Up' },
    { name: 'EXECUTIVE OFFICE', description: 'Executive Office' },
    { name: 'FOOD & NUTRITION', description: 'Food & Nutrition' },
    { name: 'GENERAL PHYSICIANS', description: 'General Physicians' },
    { name: 'GENERAL SERVICE', description: 'General Service' },
    { name: 'HEMATOLOGY', description: 'Hematology' },
    { name: 'HEMODIALYSIS UNIT', description: 'Hemodialysis Unit' },
    { name: 'HISPATHOLOGY', description: 'Hispathology' },
    { name: 'HOLTER MONITORING', description: 'Holter Monitoring' },
    { name: 'HOUSEKEEPING', description: 'Housekeeping' },
    { name: 'HR (HUMAN RESOURCE)', description: 'Hr (Human Resource)' },
    { name: 'ICU COMPLEX', description: 'Icu Complex' },
    { name: 'IMAGING', description: 'Imaging' },
    { name: 'IMAGING MISC', description: 'Imaging Misc' },
    { name: 'IMMUNOLOGY', description: 'Immunology' },
    { name: 'INFORMATION', description: 'Information' },
    { name: 'LABOR ROOM', description: 'Labor Room' },
    { name: 'LINEN AND LAUNDRY', description: 'Linen And Laundry' },
    { name: 'LR/DR/CS/HRPU', description: 'Lr/Dr/Cs/Hrpu' },
    { name: 'MAMMOGRAPHY', description: 'Mammography' },
    {
      name: 'MATERIAL AND RECOVERY FACILITY',
      description: 'Material And Recovery Facility',
    },
    { name: 'MATERIAL MANAGEMENT', description: 'Material Management' },
    { name: 'MEDICAL RECORDS', description: 'Medical Records' },
    { name: 'MICROBIOLOGY', description: 'Microbiology' },
    {
      name: 'MIS (MANAGEMENT INFORMATION SYSTEM)',
      description: 'Mis (Management Information System)',
    },
    { name: 'MORGUE', description: 'Morgue' },
    { name: 'MRI', description: 'Mri' },
    { name: 'NEUROSCIENCE', description: 'Neuroscience' },
    { name: 'NICU', description: 'Nicu' },
    { name: 'NSD ORDERLY', description: 'Nsd Orderly' },
    { name: 'NUCLEAR MEDICINE', description: 'Nuclear Medicine' },
    { name: 'NURSE FLOOR STATION 5', description: 'Nurse Floor Station 5' },
    { name: 'NURSE FLOOR STATION 6', description: 'Nurse Floor Station 6' },
    { name: 'NURSE FLOOR STATION 7', description: 'Nurse Floor Station 7' },
    { name: 'NURSING DEPARTMENT', description: 'Nursing Department' },
    {
      name: 'NURSING DIRECTORS OFFICE',
      description: 'Nursing Directors Office',
    },
    { name: 'OCCUPATIONAL THERAPY', description: 'Occupational Therapy' },
    { name: 'ONCOLOGY', description: 'Oncology' },
    { name: 'OPD', description: 'Opd' },
    { name: 'OPERATING ROOM', description: 'Operating Room' },
    { name: 'OPERATING ROOM COMPLEX', description: 'Operating Room Complex' },
    { name: 'PACU', description: 'Pacu' },
    {
      name: 'PATIENT SUPPORT AND GUEST SERVICES',
      description: 'Patient Support And Guest Services',
    },
    { name: 'PHARMACY', description: 'Pharmacy' },
    { name: 'PHILHEALTH', description: 'Philhealth' },
    {
      name: 'PHYSICAL AND REHABILITATION MEDICINE',
      description: 'Physical And Rehabilitation Medicine',
    },
    { name: 'PHYSICAL THERAPY', description: 'Physical Therapy' },
    {
      name: 'POST ANESTHESIA CARE UNIT',
      description: 'Post Anesthesia Care Unit',
    },
    { name: 'PULMONOLOGY', description: 'Pulmonology' },
    { name: 'PURCHASING', description: 'Purchasing' },
    { name: 'RESIDENT PHYSICIANS', description: 'Resident Physicians' },
    { name: 'SECURITY', description: 'Security' },
    { name: 'SEROLOGY', description: 'Serology' },
    { name: 'TB-DOTS', description: 'Tb-Dots' },
    { name: 'ULTRASOUND', description: 'Ultrasound' },
    { name: 'VASCULAR', description: 'Vascular' },
    { name: "WOMEN'S CENTER", description: "Women's Center" },
    { name: 'WOUND CARE', description: 'Wound Care' },
    { name: 'X-RAY', description: 'X-Ray' },
  ];

  await prisma.department.createMany({
    data: departments,
    skipDuplicates: true,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
