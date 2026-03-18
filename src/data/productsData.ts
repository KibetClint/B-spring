import { Scale, Monitor, Printer, Smartphone, Wifi, Code, Shield, Clock, DollarSign, Video, Users, ParkingCircle } from "lucide-react";
import hangingScaleFront from "@/assets/products/hanging-scale-front.jpg";
import hangingScaleSide from "@/assets/products/hanging-scale-side.jpg";
import hangingScaleDetail from "@/assets/products/hanging-scale-detail.jpg";
import weighingEquipment from "@/assets/weighing-equipment.jpg";
import indicatorFront from "@/assets/products/indicator-front.jpg";
import indicatorBack from "@/assets/products/indicator-back.jpg";
import printerFront from "@/assets/products/printer-front.jpg";
import printerSide from "@/assets/products/printer-side.jpg";
import laptopFront from "@/assets/products/laptop-front.jpg";
import laptopSide from "@/assets/products/laptop-side.jpg";

export interface Product {
  slug: string;
  name: string;
  category: string;
  categoryUrl: string;
  capacity?: string;
  subtitle?: string;
  description: string;
  specifications: string[];
  features?: string[];
  highlights?: string[];
  image?: string;
  images?: string[];
  icon: any;
}

export const productsData: Product[] = [
  // Weighing Equipment
  {
    slug: "ocs-sb1-hanging-scale",
    name: "OCS SB1 Hanging Scale",
    category: "Weighing Equipment",
    categoryUrl: "/products/weighing-equipment",
    capacity: "Up to 2000 kg",
    description: "Heavy-duty hanging scale with wireless connectivity and high-precision load cell technology.",
    icon: Scale,
    images: [hangingScaleFront, hangingScaleSide, hangingScaleDetail, weighingEquipment],
    highlights: [
      "Wireless connectivity up to 100m range",
      "High-precision load cell technology",
      "IP65 waterproof rating for harsh environments",
      "100+ hours battery life"
    ],
    specifications: [
      "Capacity: 2000 kg",
      "Accuracy: ±0.1%",
      "Display: LED with backlight",
      "Battery life: 100+ hours",
      "Wireless range: 100m",
      "IP Rating: IP65",
      "Operating Temperature: -10°C to 40°C",
      "Material: Aluminum alloy housing"
    ]
  },
  {
    slug: "ss-indicator-bluetooth",
    name: "SS Indicator with Bluetooth",
    category: "Weighing Equipment",
    categoryUrl: "/products/weighing-equipment",
    capacity: "Digital weighing indicator",
    description: "Stainless steel indicator with Bluetooth connectivity for seamless data transfer.",
    icon: Scale,
    images: [indicatorFront, indicatorBack, weighingEquipment],
    highlights: [
      "Bluetooth 5.0 for wireless data transfer",
      "Corrosion-resistant stainless steel",
      "Multiple unit conversions",
      "Data logging capability"
    ],
    specifications: [
      "Connectivity: Bluetooth 5.0",
      "Construction: Stainless steel 304",
      "Display: Large LCD backlit",
      "Units: kg, lb, g, oz",
      "Data Logging: Up to 10,000 records",
      "Battery: Rechargeable Li-ion",
      "Dimensions: 250x180x80mm",
      "Power Supply: AC/DC adapter included"
    ]
  },
  {
    slug: "scs-pallet-truck-scale",
    name: "SCS Pallet Truck Scale",
    category: "Weighing Equipment",
    categoryUrl: "/products/weighing-equipment",
    capacity: "Up to 3000 kg",
    description: "Portable pallet truck with integrated weighing system for on-the-go measurements.",
    icon: Scale,
    highlights: [
      "Mobile weighing solution",
      "Easy-to-read digital display",
      "Tare function for net weight",
      "Durable steel construction"
    ],
    specifications: [
      "Capacity: 3000 kg",
      "Division: 1 kg",
      "Fork length: 1150 mm",
      "Fork width: 550 mm",
      "Display: Digital LED",
      "Functions: Tare, Hold, Accumulate",
      "Wheel Material: Polyurethane",
      "Certification: CE approved"
    ]
  },
  {
    slug: "checkered-plate-platform-scale",
    name: "Checkered Plate Platform Scale",
    category: "Weighing Equipment",
    categoryUrl: "/products/weighing-equipment",
    capacity: "Up to 5000 kg",
    description: "Heavy-duty platform scale with anti-slip checkered plate surface.",
    icon: Scale,
    highlights: [
      "Anti-slip checkered plate surface",
      "Includes loading ramp",
      "Stainless steel load cells",
      "High accuracy for industrial use"
    ],
    specifications: [
      "Capacity: 5000 kg",
      "Platform size: 1500x1500 mm",
      "Accuracy: ±20 g",
      "Surface: Checkered plate",
      "Ramp: Included",
      "Load Cells: 4x Stainless steel",
      "Indicator: Separate digital display",
      "Material: Mild steel painted"
    ]
  },
  {
    slug: "electronic-platform-scale",
    name: "Electronic Platform Scale",
    category: "Weighing Equipment",
    categoryUrl: "/products/weighing-equipment",
    capacity: "Various capacities",
    description: "Versatile electronic platform scale suitable for commercial and industrial applications.",
    icon: Scale,
    highlights: [
      "Multiple capacity options available",
      "RS232/USB connectivity",
      "Overload protection",
      "Easy calibration"
    ],
    specifications: [
      "Capacities: 500kg, 1000kg, 2000kg, 3000kg",
      "Precision: High-precision sensors",
      "Display: Large digital LED",
      "Functions: Tare, Zero, Hold",
      "Protection: Overload indicator",
      "Connectivity: RS232/USB",
      "Power: AC adapter or battery",
      "Warranty: 2 years"
    ]
  },
  {
    slug: "pallet-weighing-scale",
    name: "Pallet Weighing Scale",
    category: "Weighing Equipment",
    categoryUrl: "/products/weighing-equipment",
    capacity: "Up to 10000 kg",
    description: "Industrial-grade pallet weighing system with advanced load cell technology.",
    icon: Scale,
    highlights: [
      "Heavy-duty 10-ton capacity",
      "IP68 waterproof load cells",
      "Remote display option",
      "Printer compatible"
    ],
    specifications: [
      "Capacity: 10000 kg",
      "Division: 5 kg",
      "Platform: 1500x1500 mm",
      "Load Cells: IP68 waterproof",
      "Display: Remote option available",
      "Printer: Thermal printer compatible",
      "Certification: Trade approved",
      "Installation: Professional required"
    ]
  },

  // Software Products
  {
    slug: "weighspring",
    name: "Weighspring",
    category: "Software Solutions",
    categoryUrl: "/products/software",
    subtitle: "Weighbridge Management System",
    description: "Comprehensive weighbridge management software for automated vehicle weighing, ticketing, and reporting.",
    icon: Code,
    highlights: [
      "Automated vehicle weighing",
      "Real-time data processing",
      "Customizable reporting",
      "Multi-user access control"
    ],
    specifications: [
      "Platform: Windows 10/11",
      "Database: SQL Server / MySQL",
      "Interface: Modern web-based UI",
      "Reports: 50+ pre-built templates",
      "Integration: API available",
      "Users: Unlimited concurrent",
      "License: Per site",
      "Support: 24/7 available"
    ],
    features: [
      "Automated ticket generation",
      "RFID/Barcode integration",
      "Real-time monitoring dashboard",
      "SMS/Email notifications",
      "Mobile app companion",
      "Cloud backup"
    ]
  },
  {
    slug: "timespring",
    name: "Timespring",
    category: "Software Solutions",
    categoryUrl: "/products/software",
    subtitle: "Time-released Messaging Platform",
    description: "Time-released messaging system for scheduled communications and automated notifications.",
    icon: Clock,
    highlights: [
      "Scheduled message delivery",
      "Multi-channel support",
      "Template management",
      "Analytics dashboard"
    ],
    specifications: [
      "Platform: Cloud-based",
      "Channels: SMS, Email, Push",
      "Scheduling: Advanced cron support",
      "Templates: Unlimited",
      "API: RESTful",
      "Storage: Encrypted",
      "Uptime: 99.9% SLA",
      "Scaling: Auto-scaling"
    ],
    features: [
      "Message scheduling",
      "Template editor",
      "Delivery tracking",
      "Multi-language support",
      "Bulk messaging",
      "Analytics reporting"
    ]
  },
  {
    slug: "payrollspring",
    name: "Payrollspring",
    category: "Software Solutions",
    categoryUrl: "/products/software",
    subtitle: "Payroll Processing System",
    description: "Automated payroll processing system with tax compliance and employee self-service portal.",
    icon: DollarSign,
    highlights: [
      "Automated payroll calculation",
      "Tax compliance management",
      "Employee self-service portal",
      "Direct deposit support"
    ],
    specifications: [
      "Platform: Web-based",
      "Compliance: Tax regulations updated",
      "Integration: Accounting software",
      "Reports: Comprehensive payroll",
      "Security: Bank-level encryption",
      "Mobile: iOS & Android apps",
      "Users: Unlimited employees",
      "Support: Dedicated account manager"
    ],
    features: [
      "Automated calculations",
      "Leave management",
      "Expense tracking",
      "Performance reviews",
      "Document management",
      "Multi-currency"
    ]
  },
  {
    slug: "secuspring",
    name: "Secuspring",
    category: "Software Solutions",
    categoryUrl: "/products/software",
    subtitle: "Security Management Module",
    description: "Comprehensive security management module with access control and monitoring capabilities.",
    icon: Shield,
    highlights: [
      "Access control management",
      "Real-time monitoring",
      "Incident reporting",
      "Visitor management"
    ],
    specifications: [
      "Platform: Windows/Linux",
      "Database: PostgreSQL",
      "Access Control: RFID/Biometric",
      "Cameras: Unlimited supported",
      "Storage: Scalable",
      "Mobile: Native apps",
      "Integration: 3rd party systems",
      "Backup: Automatic daily"
    ],
    features: [
      "Access control",
      "Video surveillance",
      "Incident management",
      "Visitor logging",
      "Alert system",
      "Patrol tracking"
    ]
  },
  {
    slug: "safetyspring",
    name: "Safetyspring",
    category: "Software Solutions",
    categoryUrl: "/products/software",
    subtitle: "Safety Management System",
    description: "Safety management system for workplace incident tracking and compliance monitoring.",
    icon: Shield,
    highlights: [
      "Incident tracking",
      "Safety compliance",
      "Risk assessment tools",
      "Training management"
    ],
    specifications: [
      "Platform: Cloud SaaS",
      "Compliance: OSHA standards",
      "Reports: Customizable",
      "Mobile: Field data collection",
      "Integration: ERP systems",
      "Users: Role-based access",
      "Storage: Unlimited",
      "Updates: Automatic"
    ],
    features: [
      "Incident reporting",
      "Risk assessments",
      "Safety audits",
      "Training tracking",
      "PPE management",
      "Contractor management"
    ]
  },
  {
    slug: "parkspring",
    name: "Parkspring",
    category: "Software Solutions",
    categoryUrl: "/products/software",
    subtitle: "Park Management System",
    description: "Park and facility management software for recreation centers, parks, and public spaces.",
    icon: ParkingCircle,
    highlights: [
      "Booking management",
      "Facility scheduling",
      "Payment processing",
      "Maintenance tracking"
    ],
    specifications: [
      "Platform: Web & Mobile",
      "Payment: Multiple gateways",
      "Booking: Real-time calendar",
      "Reports: Analytics dashboard",
      "Users: Unlimited",
      "Languages: Multi-language",
      "API: Available",
      "Training: Included"
    ],
    features: [
      "Online booking",
      "Resource scheduling",
      "Membership management",
      "Payment processing",
      "Maintenance logs",
      "Event management"
    ]
  },

  // Hardware Products
  {
    slug: "bluetooth-thermal-printer",
    name: "Mini Bluetooth Thermal Printers",
    category: "Hardware & Accessories",
    categoryUrl: "/products/hardware",
    description: "Portable thermal printers with Bluetooth connectivity for printing receipts, labels, and tickets on the go.",
    icon: Printer,
    images: [printerFront, printerSide],
    highlights: [
      "Portable and lightweight design",
      "Fast printing speed",
      "Long battery life",
      "Compatible with multiple devices"
    ],
    specifications: [
      "Connectivity: Bluetooth 5.0",
      "Print width: 58mm/80mm options",
      "Speed: Up to 90mm/s",
      "Battery: 2600mAh Li-ion",
      "Compatibility: Android/iOS/Windows",
      "Commands: ESC/POS",
      "Paper: Thermal paper roll",
      "Dimensions: Compact portable"
    ]
  },
  {
    slug: "business-computers",
    name: "Laptops and Desktops",
    category: "Hardware & Accessories",
    categoryUrl: "/products/hardware",
    description: "Business-grade computers optimized for weighing systems, point-of-sale, and industrial applications.",
    icon: Monitor,
    images: [laptopFront, laptopSide],
    highlights: [
      "Industrial-grade components",
      "Pre-configured for weighing software",
      "Extended warranty available",
      "Professional support"
    ],
    specifications: [
      "Processors: Intel Core / AMD Ryzen",
      "OS: Windows 10/11 Pro",
      "RAM: 8GB - 32GB",
      "Storage: SSD 256GB - 1TB",
      "Warranty: 3-year extended option",
      "Ports: Multiple USB, Serial, Ethernet",
      "Support: Pre-installed software",
      "Certification: Industrial rated"
    ]
  },
  {
    slug: "rugged-smartphones",
    name: "Smartphones",
    category: "Hardware & Accessories",
    categoryUrl: "/products/hardware",
    description: "Rugged and standard smartphones for mobile weighing applications and field operations.",
    icon: Smartphone,
    highlights: [
      "Barcode scanning capability",
      "Rugged durability",
      "Enterprise management",
      "Long battery life"
    ],
    specifications: [
      "OS: Android 11+",
      "Scanner: 1D/2D barcode",
      "NFC: Supported",
      "Battery: 5000+ mAh",
      "Durability: IP68/MIL-STD",
      "Display: 5.5 - 6.5 inch",
      "Management: MDM compatible",
      "Apps: Custom app support"
    ]
  },
  {
    slug: "cs30-android-pos",
    name: "CS30 Multipurpose Android POS",
    category: "Hardware & Accessories",
    categoryUrl: "/products/hardware",
    description: "All-in-one Android POS terminal with integrated printer and multiple connectivity options.",
    icon: Monitor,
    highlights: [
      "All-in-one design",
      "Built-in thermal printer",
      "Multiple payment options",
      "4G connectivity"
    ],
    specifications: [
      "OS: Android 11",
      "Display: 5.5 inch touchscreen",
      "Printer: Built-in 58mm thermal",
      "Connectivity: 4G/WiFi/Bluetooth",
      "Cameras: Front & rear",
      "Payment: NFC/MSR/Chip reader",
      "Battery: Rechargeable",
      "Apps: Google Play certified"
    ]
  },
  {
    slug: "network-equipment",
    name: "Network Equipment",
    category: "Hardware & Accessories",
    categoryUrl: "/products/hardware",
    description: "Industrial-grade networking solutions for connecting weighing systems and IoT devices.",
    icon: Wifi,
    highlights: [
      "Industrial-grade reliability",
      "Wide temperature range",
      "PoE support",
      "DIN rail mounting"
    ],
    specifications: [
      "Type: Switches, Routers, AP",
      "Ports: 4-24 port options",
      "PoE: IEEE 802.3af/at",
      "Temperature: -40°C to 75°C",
      "Mounting: DIN rail/wall",
      "Management: Web/SNMP",
      "Redundancy: Dual power input",
      "Certification: Industrial rated"
    ]
  },
  {
    slug: "accessories",
    name: "Accessories",
    category: "Hardware & Accessories",
    categoryUrl: "/products/hardware",
    description: "Complete range of accessories including cables, mounts, power supplies, and protective cases.",
    icon: Monitor,
    highlights: [
      "Wide range of options",
      "Quality components",
      "Compatible with all systems",
      "Bulk ordering available"
    ],
    specifications: [
      "Cables: USB/RS232/Ethernet",
      "Mounts: Various brackets/stands",
      "Power: Adapters & UPS units",
      "Cases: Protective & transport",
      "Scanners: Barcode readers",
      "Consumables: Labels & ribbons",
      "Tools: Installation kits",
      "Warranty: Component specific"
    ]
  }
];
