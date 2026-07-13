function SoftIcon({ fill = "#059669", children }) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect width="16" height="16" rx="3" fill={fill} />
      {children}
    </svg>
  );
}

function strokePath(d, color = "#fff", props = {}) {
  return (
    <path
      d={d}
      stroke={color}
      strokeWidth="0.85"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      {...props}
    />
  );
}

function strokeRect(props, color = "#fff") {
  return <rect {...props} stroke={color} fill="none" />;
}

function fillCircle(props, color = "#fff") {
  return <circle {...props} fill={color} />;
}

const capabilitySkillIcons = {
  Python: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect width="16" height="16" rx="3" fill="#3776AB" />
      <path
        fill="#FFD43B"
        d="M8 2.2c-1.4 0-2.5.01-3.2.04-.7.03-1.2.14-1.6.28-.44.17-.76.38-1.1.72-.34.34-.54.66-.71 1.1-.16.39-.28.86-.32 1.58-.04.72-.04.94-.04 1.46 0 .52.03 1.18.04 1.3.1.12 1.86.12 1.86.12v1.2s-1.76 0-1.86.12c-.1.12-.04.84-.04 1.38 0 .54-.06 1.24.04 1.38.1.14 1.86.14 1.86.14V12c0 1.4 1.1 2.5 2.5 2.5h.72V14s1.3.01 1.76-.04c.46-.05.78-.16 1.04-.34.28-.18.48-.38.7-.7.2-.32.34-.7.38-1.28.04-.58.04-.76.04-1.18 0-.42.04-.98-.04-1.1-.1-.12-1.86-.12-1.86-.12V9.2s1.76 0 1.86-.12c.1-.12.04-.84.04-1.38 0-.54-.04-1.24-.04-1.38-.1-.14-1.86-.14-1.86-.14V4.8c0-1.4-1.1-2.5-2.5-2.5H8Z"
      />
      <path
        fill="#fff"
        opacity="0.92"
        d="M10.6 8.2c0 1.4-1.1 2.5-2.5 2.5H7.4V13s1.3-.01 1.76-.04c.46-.05.78-.16 1.04-.34.28-.18.48-.38.7-.7.2-.32.34-.7.38-1.28.04-.58.04-.76.04-1.18 0-.42.04-.98-.04-1.1-.1-.12-1.86-.12-1.86-.12V11.2s1.76 0 1.86-.12c.1-.12.04-.84.04-1.38 0-.54-.04-1.24-.04-1.38-.1-.14-1.86-.14-1.86-.14V8.2Z"
      />
    </svg>
  ),
  Pandas: (
    <SoftIcon fill="#150458">
      {strokeRect({ x: 3.4, y: 3.4, width: 9.2, height: 9.2, rx: 1, strokeWidth: 0.75 })}
      {strokePath("M3.4 6.4h9.2M3.4 9.6h9.2M6.4 3.4v9.2M9.6 3.4v9.2")}
    </SoftIcon>
  ),
  NumPy: (
    <SoftIcon fill="#4DABCF">
      {strokePath("M3.6 12.4 8 3.6l4.4 8.8M5.6 9.2h4.8")}
    </SoftIcon>
  ),
  "Scikit-learn": (
    <SoftIcon fill="#F7931E">
      <circle cx="4.8" cy="8" r="1.4" stroke="#fff" strokeWidth="0.75" fill="none" />
      <circle cx="8" cy="5.2" r="1.4" stroke="#fff" strokeWidth="0.75" fill="none" />
      <circle cx="11.2" cy="8" r="1.4" stroke="#fff" strokeWidth="0.75" fill="none" />
      {strokePath("M6 7.2 7 5.8M9 5.8 10 7.2M6 8.8 7 10.2M9 10.2 10 8.8")}
    </SoftIcon>
  ),
  "Machine Learning": (
    <SoftIcon fill="#059669">
      {strokePath("M8 3.2v2.4M5.6 8.8 3.6 11.2M10.4 8.8 12.4 11.2")}
      <circle cx="8" cy="7.2" r="2.4" stroke="#fff" strokeWidth="0.75" fill="none" />
      {strokePath("M8 4.8c1.8 0 3.2 1 3.2 2.4S9.8 9.6 8 9.6 4.8 8.6 4.8 7.2 6.2 4.8 8 4.8Z")}
    </SoftIcon>
  ),
  Regression: (
    <SoftIcon fill="#2563EB">
      {strokePath("M3.2 11.2 6.4 8.4 9.2 9.6 12.8 4.8")}
      {strokePath("M11.6 4.8h1.2v1.2")}
    </SoftIcon>
  ),
  Classification: (
    <SoftIcon fill="#7C3AED">
      {strokeRect({ x: 3.2, y: 4, width: 3.6, height: 2.4, rx: 0.5, strokeWidth: 0.7 })}
      {strokeRect({ x: 9.2, y: 4, width: 3.6, height: 2.4, rx: 0.5, strokeWidth: 0.7 })}
      {strokeRect({ x: 3.2, y: 9.6, width: 3.6, height: 2.4, rx: 0.5, strokeWidth: 0.7 })}
      {strokeRect({ x: 9.2, y: 9.6, width: 3.6, height: 2.4, rx: 0.5, strokeWidth: 0.7 })}
    </SoftIcon>
  ),
  "Model Evaluation": (
    <SoftIcon fill="#16A34A">
      {strokePath("M4 8.4 6.2 10.6 12 4.8")}
      {strokeRect({ x: 3.2, y: 3.2, width: 9.6, height: 9.6, rx: 1, strokeWidth: 0.7 })}
    </SoftIcon>
  ),
  "Feature Engineering": (
    <SoftIcon fill="#0891B2">
      {strokePath("M8 3.2v2M6.4 7.2h3.2M8 9.2v3.6")}
      <circle cx="8" cy="7.2" r="1.8" stroke="#fff" strokeWidth="0.75" fill="none" />
      {strokePath("M10.4 4.8 12 3.2M12 3.2v1.8")}
    </SoftIcon>
  ),
  GridSearchCV: (
    <SoftIcon fill="#6366F1">
      {strokeRect({ x: 3.2, y: 3.2, width: 3.2, height: 3.2, rx: 0.4, strokeWidth: 0.65 })}
      {strokeRect({ x: 6.4, y: 3.2, width: 3.2, height: 3.2, rx: 0.4, strokeWidth: 0.65 })}
      {strokeRect({ x: 9.6, y: 3.2, width: 3.2, height: 3.2, rx: 0.4, strokeWidth: 0.65 })}
      {strokeRect({ x: 3.2, y: 6.4, width: 3.2, height: 3.2, rx: 0.4, strokeWidth: 0.65 })}
      {strokePath("M10.4 8.8 12.8 11.2M12.8 8.8 10.4 11.2")}
    </SoftIcon>
  ),
  SMOTE: (
    <SoftIcon fill="#9333EA">
      {strokePath("M8 3.6v8.8")}
      {strokePath("M5.6 6.4h4.8M5.6 9.6h4.8")}
      {fillCircle({ cx: 5.6, cy: 6.4, r: 0.8 })}
      {fillCircle({ cx: 10.4, cy: 9.6, r: 0.8 })}
    </SoftIcon>
  ),
  "TensorFlow/Keras": (
    <SoftIcon fill="#FF6F00">
      {strokePath("M8 3.2 11.2 5.6v4.8L8 12.8 4.8 10.4V5.6L8 3.2Z")}
      {strokePath("M8 5.6v6.4M4.8 5.6l3.2 1.8M11.2 5.6 8 7.4")}
    </SoftIcon>
  ),
  "Tensor Flow/Keras": (
    <SoftIcon fill="#FF6F00">
      {strokePath("M8 3.2 11.2 5.6v4.8L8 12.8 4.8 10.4V5.6L8 3.2Z")}
      {strokePath("M8 5.6v6.4M4.8 5.6l3.2 1.8M11.2 5.6 8 7.4")}
    </SoftIcon>
  ),
  "imbalanced-learn": (
    <SoftIcon fill="#8B5CF6">
      {strokePath("M8 3.6v8.8M5.2 6h5.6M5.2 10h5.6")}
      {fillCircle({ cx: 5.2, cy: 6, r: 0.9 })}
      {fillCircle({ cx: 10.8, cy: 10, r: 0.5 })}
    </SoftIcon>
  ),
  "Imbalanced learn": (
    <SoftIcon fill="#8B5CF6">
      {strokePath("M8 3.6v8.8M5.2 6h5.6M5.2 10h5.6")}
      {fillCircle({ cx: 5.2, cy: 6, r: 0.9 })}
      {fillCircle({ cx: 10.8, cy: 10, r: 0.5 })}
    </SoftIcon>
  ),
  "Jupyter Notebook": (
    <SoftIcon fill="#F37626">
      {strokeRect({ x: 4, y: 3.2, width: 8, height: 9.6, rx: 0.8, strokeWidth: 0.75 })}
      {strokePath("M5.6 6h4.8M5.6 8h4.8M5.6 10h2.8")}
      {strokePath("M10.4 3.2v1.6")}
    </SoftIcon>
  ),
  "Exploratory Data Analysis": (
    <SoftIcon fill="#0284C7">
      {strokePath("M6.8 6.8 9.2 9.2M9.2 6.8 6.8 9.2")}
      <circle cx="8" cy="8" r="3.6" stroke="#fff" strokeWidth="0.75" fill="none" />
      {strokePath("M3.2 12 5.2 10.4")}
    </SoftIcon>
  ),
  "Data Cleaning": (
    <SoftIcon fill="#0EA5E9">
      {strokePath("M4.8 4.8 8 3.2l3.2 1.6v4.8c0 1.4-1.4 2.4-3.2 2.4S4.8 11 4.8 9.6V4.8Z")}
      {strokePath("M6.4 8.8 7.6 10 9.6 7.6")}
    </SoftIcon>
  ),
  "Data Preprocessing": (
    <SoftIcon fill="#0891B2">
      {strokePath("M4 4.8h8l-1.6 2.4H5.6L4 4.8Z")}
      {strokePath("M5.6 7.2h4.8l-1.2 4H6.8l-1.2-4Z")}
    </SoftIcon>
  ),
  Matplotlib: (
    <SoftIcon fill="#11557C">
      {strokePath("M3.2 11.2V6.4M6.4 11.2V4.8M9.6 11.2V8M12.8 11.2V5.6")}
      {strokePath("M3.2 11.2h9.6")}
    </SoftIcon>
  ),
  Seaborn: (
    <SoftIcon fill="#4C72B0">
      {strokeRect({ x: 3.2, y: 3.2, width: 2.4, height: 2.4, rx: 0.3, strokeWidth: 0.65 })}
      {strokeRect({ x: 6.8, y: 3.2, width: 2.4, height: 2.4, rx: 0.3, strokeWidth: 0.65 })}
      {strokeRect({ x: 10.4, y: 3.2, width: 2.4, height: 2.4, rx: 0.3, strokeWidth: 0.65 })}
      <rect x="3.2" y="6.8" width="2.4" height="2.4" rx="0.3" stroke="#fff" strokeWidth="0.65" fill="#fff" fillOpacity="0.25" />
      <rect x="6.8" y="6.8" width="2.4" height="2.4" rx="0.3" stroke="#fff" strokeWidth="0.65" fill="#fff" fillOpacity="0.45" />
      <rect x="10.4" y="6.8" width="2.4" height="2.4" rx="0.3" stroke="#fff" strokeWidth="0.65" fill="#fff" fillOpacity="0.65" />
    </SoftIcon>
  ),
  "Statistical Analysis": (
    <SoftIcon fill="#2563EB">
      {strokePath("M3.6 10.4c1.2-3.6 2.4-5.2 4.4-5.2s3.2 1.6 4.4 5.2")}
      {strokePath("M3.2 10.4h9.6")}
    </SoftIcon>
  ),
  "Correlation Analysis": (
    <SoftIcon fill="#4F46E5">
      {strokePath("M4 11.2 7.2 7.2 10.4 9.6 12.8 5.6")}
      {fillCircle({ cx: 7.2, cy: 7.2, r: 1 })}
      {fillCircle({ cx: 10.4, cy: 9.6, r: 1 })}
    </SoftIcon>
  ),
  "Data Visualization": (
    <SoftIcon fill="#1572B6">
      {strokePath("M3.2 11.2h9.6")}
      {strokePath("M5.2 11.2V8M8 11.2V5.6M10.8 11.2V7.2")}
    </SoftIcon>
  ),
  "Summary Statistics": (
    <SoftIcon fill="#475569">
      {strokePath("M4.8 4.8h6.4M4.8 8h6.4M4.8 11.2h4")}
      {strokePath("M11.2 10.4h1.6v1.6")}
    </SoftIcon>
  ),
  "Numerical Validation": (
    <SoftIcon fill="#16A34A">
      {strokePath("M4.4 8.4 6.4 10.4 11.6 5.2")}
      {strokePath("M5.6 3.2h4.8M5.6 12.8h4.8")}
    </SoftIcon>
  ),
  "Power BI": (
    <SoftIcon fill="#F2C811">
      {strokeRect({ x: 3.2, y: 4, width: 9.6, height: 7.2, rx: 0.8, strokeWidth: 0.75 }, "#1F2937")}
      {strokePath("M5.2 9.6V7.2M7.6 9.6V5.6M10 9.6V6.4", "#1F2937")}
    </SoftIcon>
  ),
  Tableau: (
    <SoftIcon fill="#E97627">
      {strokePath("M8 3.2v9.6M5.6 5.6h4.8M5.6 8h4.8")}
      {strokePath("M5.6 3.2h4.8")}
    </SoftIcon>
  ),
  n8n: (
    <SoftIcon fill="#EA4B71">
      <circle cx="4.8" cy="8" r="1.5" stroke="#fff" strokeWidth="0.75" fill="none" />
      <circle cx="8" cy="5.2" r="1.5" stroke="#fff" strokeWidth="0.75" fill="none" />
      <circle cx="11.2" cy="8" r="1.5" stroke="#fff" strokeWidth="0.75" fill="none" />
      {strokePath("M6.1 7.2 7 5.8M8.9 5.8 9.8 7.2M9.8 8.8 8.9 10.2M7 10.2 6.1 8.8")}
    </SoftIcon>
  ),
  "CRM Automation": (
    <SoftIcon fill="#2563EB">
      <circle cx="6" cy="6" r="1.5" stroke="#fff" strokeWidth="0.7" fill="none" />
      <circle cx="10.4" cy="6" r="1.5" stroke="#fff" strokeWidth="0.7" fill="none" />
      {strokePath("M4 10.8c.8-1.4 1.8-2 2-2s1.2.6 2 2M8.4 10.8c.8-1.4 1.4-2 1.8-2s1 .6 1.6 2")}
      {strokePath("M11.6 4.8v1.6M10.8 5.6h1.6")}
    </SoftIcon>
  ),
  Webhooks: (
    <SoftIcon fill="#7C3AED">
      {strokePath("M5.6 5.6c1.2-1.2 3.2-1.2 4.4 0M10.4 10.4c-1.2 1.2-3.2 1.2-4.4 0")}
      {strokePath("M6.4 6.4 9.6 9.6M9.6 6.4 6.4 9.6")}
    </SoftIcon>
  ),
  "API-based Integrations": (
    <SoftIcon fill="#0284C7">
      <circle cx="5.2" cy="8" r="1.5" stroke="#fff" strokeWidth="0.7" fill="none" />
      <circle cx="10.8" cy="8" r="1.5" stroke="#fff" strokeWidth="0.7" fill="none" />
      {strokePath("M6.7 8h2.6")}
      {strokePath("M3.6 5.2h8.8M3.6 10.8h8.8", "#fff", { opacity: 0.55 })}
    </SoftIcon>
  ),
  "Low-Code Workflows": (
    <SoftIcon fill="#0891B2">
      {strokeRect({ x: 3.2, y: 4, width: 3.6, height: 2.8, rx: 0.5, strokeWidth: 0.65 })}
      {strokeRect({ x: 9.2, y: 4, width: 3.6, height: 2.8, rx: 0.5, strokeWidth: 0.65 })}
      {strokeRect({ x: 6.2, y: 9.2, width: 3.6, height: 2.8, rx: 0.5, strokeWidth: 0.65 })}
      {strokePath("M5 6.8 6.8 9.2M11 6.8 9.2 9.2")}
    </SoftIcon>
  ),
  "No-Code Workflows": (
    <SoftIcon fill="#06B6D4">
      {strokeRect({ x: 3.2, y: 3.6, width: 4, height: 3.2, rx: 0.5, strokeWidth: 0.65 })}
      {strokeRect({ x: 8.8, y: 3.6, width: 4, height: 3.2, rx: 0.5, strokeWidth: 0.65 })}
      {strokeRect({ x: 6, y: 9.2, width: 4, height: 3.2, rx: 0.5, strokeWidth: 0.65 })}
      {strokePath("M5.2 6.8 7.2 9.2M10.8 6.8 8.8 9.2")}
    </SoftIcon>
  ),
  "Business Intelligence": (
    <SoftIcon fill="#F59E0B">
      {strokePath("M4.8 11.2V7.6M8 11.2V5.2M11.2 11.2V8.4")}
      {strokePath("M3.6 11.2h8.8")}
      {strokePath("M10.4 3.6h2.4v2.4h-2.4V3.6Z")}
    </SoftIcon>
  ),
  "Data Reporting": (
    <SoftIcon fill="#64748B">
      {strokeRect({ x: 4, y: 3.2, width: 8, height: 9.6, rx: 0.8, strokeWidth: 0.75 })}
      {strokePath("M5.6 6h4.8M5.6 8.4h4.8M5.6 10.8h2.4")}
      {strokePath("M9.6 10.8h1.2v1.2")}
    </SoftIcon>
  ),
  "Mechatronics Engineering": (
    <SoftIcon fill="#059669">
      <circle cx="8" cy="8" r="2.4" stroke="#fff" strokeWidth="0.75" fill="none" />
      {strokePath("M8 3.2v1.6M8 11.2v1.6M3.2 8h1.6M11.2 8h1.6M5.2 5.2l1.1 1.1M9.7 9.7l1.1 1.1M5.2 10.8l1.1-1.1M9.7 6.3l1.1-1.1")}
    </SoftIcon>
  ),
  "Technical Standards Review": (
    <SoftIcon fill="#0F766E">
      {strokeRect({ x: 4, y: 3.2, width: 8, height: 9.6, rx: 0.8, strokeWidth: 0.75 })}
      {strokePath("M5.6 6.4h4.8M5.6 8.4h4.8")}
      {strokePath("M5.6 10.8 7.2 12 10.4 9.2")}
    </SoftIcon>
  ),
  "Technical Evaluation": (
    <SoftIcon fill="#2563EB">
      {strokePath("M6.8 6.8 9.2 9.2M9.2 6.8 6.8 9.2")}
      <circle cx="8" cy="8" r="3.2" stroke="#fff" strokeWidth="0.75" fill="none" />
      {strokePath("M10.8 10.8 12.8 12.8")}
    </SoftIcon>
  ),
  "Engineering Documentation": (
    <SoftIcon fill="#475569">
      {strokeRect({ x: 4, y: 3.2, width: 8, height: 9.6, rx: 0.8, strokeWidth: 0.75 })}
      {strokePath("M5.6 6h4.8M5.6 8h4.8M5.6 10h2.8")}
    </SoftIcon>
  ),
  "Electrical Systems": (
    <SoftIcon fill="#CA8A04">
      {strokePath("M9.2 3.2 6.4 8.8h2.4L6.8 12.8l4.8-6.4H9.2V3.2Z", "#FEF9C3")}
    </SoftIcon>
  ),
  "Mechanical Systems": (
    <SoftIcon fill="#64748B">
      <circle cx="8" cy="8" r="2.6" stroke="#fff" strokeWidth="0.75" fill="none" />
      {strokePath("M8 3.2v1.4M8 11.4v1.4M3.2 8h1.4M11.4 8h1.4")}
    </SoftIcon>
  ),
  "Digital Logic": (
    <SoftIcon fill="#6366F1">
      {strokePath("M3.6 8h3.2M9.2 8h3.2")}
      {strokeRect({ x: 6.8, y: 5.6, width: 2.4, height: 4.8, rx: 0.4, strokeWidth: 0.7 })}
      {strokePath("M7.4 6.8h1.2M7.4 9.2h1.2")}
    </SoftIcon>
  ),
  Circuits: (
    <SoftIcon fill="#EF4444">
      {strokePath("M3.2 8h2.4l1.2-2.4 1.6 4.8 1.6-4.8 1.2 2.4h2.4")}
      {fillCircle({ cx: 3.2, cy: 8, r: 0.7 })}
      {fillCircle({ cx: 12.8, cy: 8, r: 0.7 })}
    </SoftIcon>
  ),
  "PLC Fundamentals": (
    <SoftIcon fill="#78716C">
      {strokeRect({ x: 3.6, y: 4.8, width: 8.8, height: 6.4, rx: 0.8, strokeWidth: 0.75 })}
      {strokePath("M5.6 7.2h4.8M5.6 9.2h2.4")}
      {fillCircle({ cx: 10, cy: 9.2, r: 0.6 })}
    </SoftIcon>
  ),
  "Compliance Review": (
    <SoftIcon fill="#16A34A">
      {strokePath("M8 3.2 4.8 4.8v3.6c0 2 1.4 3.8 3.2 4.4 1.8-.6 3.2-2.4 3.2-4.4V4.8L8 3.2Z")}
      {strokePath("M6.4 8.4 7.6 9.6 9.8 7.2")}
    </SoftIcon>
  ),
  "Problem Solving": (
    <SoftIcon fill="#F59E0B">
      {strokePath("M8 3.2c-1.6 0-2.8 1.2-2.8 2.6 0 1 .6 1.8 1.4 2.4L6 11.2h4l-.6-2.8c.8-.6 1.4-1.4 1.4-2.4 0-1.4-1.2-2.6-2.8-2.6Z")}
      {strokePath("M6.4 12.4h3.2")}
    </SoftIcon>
  ),
  "Structured Reasoning": (
    <SoftIcon fill="#475569">
      {strokePath("M4 4.8h8M4 8h8M4 11.2h8")}
      {strokePath("M6.4 4.8v6.4M9.6 4.8v6.4")}
    </SoftIcon>
  ),
  "Analytical Thinking": (
    <SoftIcon fill="#4F46E5">
      {strokePath("M8 3.6v2M5.6 9.2 3.6 11.6M10.4 9.2 12.4 11.6")}
      <circle cx="8" cy="7.6" r="2.2" stroke="#fff" strokeWidth="0.75" fill="none" />
    </SoftIcon>
  ),
  "Root Cause Analysis": (
    <SoftIcon fill="#DC2626">
      <circle cx="8" cy="6" r="2" stroke="#fff" strokeWidth="0.75" fill="none" />
      {fillCircle({ cx: 8, cy: 6, r: 0.6 })}
      {strokePath("M8 8v2.4M6.4 12h3.2")}
    </SoftIcon>
  ),
  "Technical Problem Evaluation": (
    <SoftIcon fill="#2563EB">
      {strokeRect({ x: 3.6, y: 4, width: 8.8, height: 7.2, rx: 0.8, strokeWidth: 0.75 })}
      {strokePath("M5.6 6.8h4.8M5.6 8.8h3.2")}
      {strokePath("M10.8 3.2v1.6M10 3.6h1.6")}
    </SoftIcon>
  ),
  "Decision Support": (
    <SoftIcon fill="#0891B2">
      {strokePath("M8 3.2v2.4M5.6 7.2 3.6 10.4M10.4 7.2 12.4 10.4")}
      <circle cx="8" cy="6.8" r="1.6" stroke="#fff" strokeWidth="0.75" fill="none" />
    </SoftIcon>
  ),
  Accuracy: (
    <SoftIcon fill="#16A34A">
      <circle cx="8" cy="8" r="3.6" stroke="#fff" strokeWidth="0.75" fill="none" />
      <circle cx="8" cy="8" r="1.2" stroke="#fff" strokeWidth="0.75" fill="none" />
      {strokePath("M8 4.4v1.2M8 10.4v1.2M4.4 8h1.2M10.4 8h1.2")}
    </SoftIcon>
  ),
  "Attention to Detail": (
    <SoftIcon fill="#EC4899">
      {strokePath("M8 4.4c-2 1.6-3.2 3.2-3.2 4.8 0 1.8 1.4 3.2 3.2 3.2s3.2-1.4 3.2-3.2C11.2 7.6 10 6 8 4.4Z")}
      {fillCircle({ cx: 8, cy: 9.2, r: 0.8 })}
    </SoftIcon>
  ),
  SQL: (
    <SoftIcon fill="#00758F">
      <ellipse cx="8" cy="5.2" rx="4.2" ry="1.4" stroke="#fff" strokeWidth="0.75" fill="none" />
      {strokePath("M3.8 5.2v4.8c0 .8 1.8 1.4 4.2 1.4s4.2-.6 4.2-1.4V5.2")}
      <ellipse cx="8" cy="10" rx="4.2" ry="1.4" stroke="#fff" strokeWidth="0.75" fill="none" />
    </SoftIcon>
  ),
  "Microsoft SQL Server": (
    <SoftIcon fill="#CC2927">
      <ellipse cx="8" cy="5" rx="4" ry="1.3" stroke="#fff" strokeWidth="0.75" fill="none" />
      {strokePath("M4 5v4.2c0 .8 1.8 1.4 4 1.4s4-.6 4-1.4V5")}
      {strokePath("M11.6 4v2.4M10.4 4.8h2.4")}
    </SoftIcon>
  ),
  Git: (
    <SoftIcon fill="#F05032">
      <circle cx="5.2" cy="10.4" r="1.2" stroke="#fff" strokeWidth="0.7" fill="none" />
      <circle cx="10.8" cy="5.6" r="1.2" stroke="#fff" strokeWidth="0.7" fill="none" />
      <circle cx="10.8" cy="10.4" r="1.2" stroke="#fff" strokeWidth="0.7" fill="none" />
      {strokePath("M5.2 9.2V7.4c0-.8.6-1.4 1.4-1.4h1.8M10.8 6.8v2.8")}
    </SoftIcon>
  ),
  GitHub: (
    <SoftIcon fill="#24292F">
      {strokePath(
        "M8 3.2c-2.4 0-4.4 2-4.4 4.4 0 1.9 1.2 3.6 3 4.2.2 0 .3-.1.3-.3v-1c-1.2.3-1.5-.6-1.5-.6-.2-.5-.5-.6-.5-.6-.4-.3 0-.3 0-.3.4 0 .7.3.7.3.4.7 1 .5 1.2.4-.1-.2-.4-.6-.4-1 0-.5.2-.9.5-1.2 0-.1-.2-.6.1-1.2 0 0 .4-.1 1.2.5.4-.1.8-.2 1.2-.2s.8.1 1.2.2c.8-.6 1.2-.5 1.2-.5.3.6.1 1.1.1 1.2.3.3.5.7.5 1.2 0 .4-.1.8-.4 1 .3.1.8.3 1.2.5.2 0 .3.1.3.3 1.8-.6 3-2.3 3-4.2 0-2.4-2-4.4-4.4-4.4Z",
      )}
    </SoftIcon>
  ),
  "C Programming": (
    <SoftIcon fill="#00599C">
      {strokePath("M10.4 4.8c-1.4-.8-3.2-.6-4.4.4-1.4 1.2-1.6 3.2-.4 4.6 1 1.2 2.6 1.6 4 1 .8-.3 1.4-.8 1.8-1.4")}
    </SoftIcon>
  ),
  APIs: (
    <SoftIcon fill="#0284C7">
      <circle cx="5.2" cy="8" r="1.4" stroke="#fff" strokeWidth="0.7" fill="none" />
      <circle cx="10.8" cy="8" r="1.4" stroke="#fff" strokeWidth="0.7" fill="none" />
      {strokePath("M6.6 8h2.8")}
    </SoftIcon>
  ),
  "Workflow Design": (
    <SoftIcon fill="#0891B2">
      <circle cx="4.4" cy="8" r="1.2" stroke="#fff" strokeWidth="0.7" fill="none" />
      <circle cx="8" cy="8" r="1.2" stroke="#fff" strokeWidth="0.7" fill="none" />
      <circle cx="11.6" cy="8" r="1.2" stroke="#fff" strokeWidth="0.7" fill="none" />
      {strokePath("M5.6 8h1.6M9.2 8h1.6")}
    </SoftIcon>
  ),
  "Technical Documentation": (
    <SoftIcon fill="#475569">
      {strokeRect({ x: 4, y: 3.2, width: 8, height: 9.6, rx: 0.8, strokeWidth: 0.75 })}
      {strokePath("M5.6 6h4.8M5.6 8h4.8M5.6 10h2.8")}
    </SoftIcon>
  ),
  "Project-Based Learning": (
    <SoftIcon fill="#4F46E5">
      {strokePath("M3.6 5.2 8 3.2l4.4 2v6.4L8 13.6l-4.4-2V5.2Z")}
      {strokePath("M8 3.2v10.4M3.6 5.2l4.4 2 4.4-2")}
    </SoftIcon>
  ),
  "Cross-Functional Collaboration": (
    <SoftIcon fill="#059669">
      <circle cx="5.6" cy="6.2" r="1.3" stroke="#fff" strokeWidth="0.7" fill="none" />
      <circle cx="10.4" cy="6.2" r="1.3" stroke="#fff" strokeWidth="0.7" fill="none" />
      <circle cx="8" cy="10.4" r="1.3" stroke="#fff" strokeWidth="0.7" fill="none" />
      {strokePath("M6.4 7 7.2 9.4M9.6 7 8.8 9.4M6.8 6.6h2.4")}
    </SoftIcon>
  ),
  "Logistic Regression": (
    <SoftIcon fill="#2563EB">
      {strokePath("M3.2 11.2c2-4 4.4-6 6.8-6s4.8 2 6.8 6")}
      {strokePath("M3.2 11.2h9.6")}
    </SoftIcon>
  ),
  "Random Forest": (
    <SoftIcon fill="#15803D">
      {strokePath("M8 3.2v2.4M5.6 8.8 3.6 11.2M10.4 8.8 12.4 11.2")}
      <circle cx="8" cy="7.2" r="2" stroke="#fff" strokeWidth="0.75" fill="none" />
      {strokePath("M6.4 11.2h3.2")}
    </SoftIcon>
  ),
  "Keras Tuner": (
    <SoftIcon fill="#D946EF">
      {strokeRect({ x: 3.2, y: 4, width: 3.2, height: 3.2, rx: 0.4, strokeWidth: 0.65 })}
      {strokeRect({ x: 6.4, y: 4, width: 3.2, height: 3.2, rx: 0.4, strokeWidth: 0.65 })}
      {strokeRect({ x: 9.6, y: 4, width: 3.2, height: 3.2, rx: 0.4, strokeWidth: 0.65 })}
      {strokePath("M4.8 9.6v2.4M8 8.8v3.2M11.2 9.6v2.4")}
    </SoftIcon>
  ),
  "st.chat_input": (
    <SoftIcon fill="#FF4B4B">
      {strokeRect({ x: 3.2, y: 9.6, width: 9.6, height: 2.4, rx: 0.6, strokeWidth: 0.75 })}
      {strokePath("M10 10.4h1.2v1.2")}
      {strokePath("M5.6 4.8h4.8")}
    </SoftIcon>
  ),
  "st.chat_message": (
    <SoftIcon fill="#FF4B4B">
      {strokePath("M4.4 4.8h5.6a1 1 0 0 1 1 1v3.2a1 1 0 0 1-1 1H6.8L4.8 11.2V5.8a1 1 0 0 1 1-1Z")}
      {strokePath("M8.4 6h2.8")}
    </SoftIcon>
  ),
  "Mock Responses": (
    <SoftIcon fill="#FF4B4B">
      {strokePath("M4 6h4.8a1 1 0 0 1 1 1v2.8a1 1 0 0 1-1 1H5.6L3.6 12V7a1 1 0 0 1 1-1Z")}
      {strokePath("M10.4 8h2.4M11.6 7.2v1.6")}
    </SoftIcon>
  ),
  "Fire Safety": (
    <SoftIcon fill="#EA580C">
      {strokePath("M8 12.8c2-2 3.2-3.6 3.2-5.6 0-1.8-1-3.2-2.4-3.8.4 1.6-.4 2.8-1.2 3.6-.2-1.4.2-2.6 1-3.6C7.6 4 7 3.2 8 3.2c1.4 0 2.4 1.2 2.4 2.8 0 .8-.2 1.6-.6 2.2")}
    </SoftIcon>
  ),
  "Fuel Equipment": (
    <SoftIcon fill="#78716C">
      {strokeRect({ x: 5.6, y: 3.6, width: 4.8, height: 8.8, rx: 0.8, strokeWidth: 0.75 })}
      {strokePath("M7.2 6h1.6M7.2 8h1.6M7.2 10h1.6")}
      {strokePath("M8 12.4v1.2")}
    </SoftIcon>
  ),
  "Data Analysis": (
    <SoftIcon fill="#0284C7">
      {strokePath("M3.2 11.2h9.6")}
      {strokePath("M5.2 11.2V8M8 11.2V5.6M10.8 11.2V7.2")}
      {strokePath("M10.4 4 12.8 6.4")}
    </SoftIcon>
  ),
  Streamlit: (
    <SoftIcon fill="#FF4B4B">
      {strokePath("M5.6 4.8h4.8v1.6H8v6.4")}
      {strokePath("M10.4 4.8h1.6v6.4")}
    </SoftIcon>
  ),
  "Workflow Automation": (
    <SoftIcon fill="#EA4B71">
      <circle cx="4.4" cy="8" r="1.2" stroke="#fff" strokeWidth="0.7" fill="none" />
      <circle cx="8" cy="5.2" r="1.2" stroke="#fff" strokeWidth="0.7" fill="none" />
      <circle cx="11.6" cy="8" r="1.2" stroke="#fff" strokeWidth="0.7" fill="none" />
      {strokePath("M5.6 7.2 7 5.8M9 5.8 10.4 7.2M10.4 8.8 9 10.2M7 10.2 5.6 8.8")}
      {strokePath("M8 10.2v1.6")}
    </SoftIcon>
  ),
};

const capabilitySkillIconAliases = {
  API: "APIs",
  Documentation: "Technical Documentation",
  "Cross-functional Collaboration": "Cross-Functional Collaboration",
  "Technical Standards": "Technical Standards Review",
  "SQL Server": "Microsoft SQL Server",
  "Technical Problem Solving": "Technical Problem Evaluation",
};

function DefaultCapabilitySkillIcon() {
  return (
    <SoftIcon fill="#059669">
      {strokePath("M4.8 8h6.4")}
      <circle cx="8" cy="8" r="3.2" stroke="#fff" strokeWidth="0.75" fill="none" />
    </SoftIcon>
  );
}

function normalizeSkillLabel(label) {
  return String(label ?? "").trim().replace(/\s+/g, " ");
}

export function CapabilitySkillIcon({ label }) {
  const normalized = normalizeSkillLabel(label);
  const iconKey = capabilitySkillIconAliases[normalized] ?? normalized;
  return capabilitySkillIcons[iconKey] ?? <DefaultCapabilitySkillIcon />;
}
