export const greetingMessage =
  "Hi, I'm Momen's portfolio assistant. Ask me about his projects, experience, skills, resume, or contact details.";

export const fallbackResponse =
  "I can help with Momen's projects, skills, experience, education, resume, availability, and contact details. Try asking about Product Sales Prediction, Metabolic Syndrome Prediction, his data science skills, or how to reach him.";

export const askBotPhoneNumber = "+972597922266";
export const askBotPhoneDisplay = "+972-597922266";

export const recommendationFormEndpoint = "https://formspree.io/f/mwvdwqkz";
export const recommendationFormSource = "Momen portfolio AskBot";

export const quickQuestions = [
  "What projects has Momen built?",
  "What technologies does Momen use?",
  "Tell me about Product Sales Prediction",
  "Tell me about Metabolic Syndrome Prediction",
  "What is Momen's engineering background?",
  "How can I contact Momen?",
];

export const botResponses = [
  {
    id: "product-sales",
    keywords: [
      "product sales",
      "prediction of product sales",
      "sales prediction",
      "retail sales",
      "item outlet sales",
      "random forest",
      "linear regression",
      "regression project",
    ],
    answer:
      "Prediction of Product Sales is a machine learning regression project focused on analyzing historical retail data and predicting Item_Outlet_Sales. Momen used Python, Pandas, Scikit-learn, preprocessing pipelines, Linear Regression, Random Forest, GridSearchCV, and evaluation metrics such as MAE, RMSE, and R².",
    actions: [
      {
        label: "See Product Sales Project",
        href: "#prediction-of-product-sales",
        external: false,
      },
      {
        label: "Product Sales GitHub",
        href: "https://github.com/MomenJabr/Prediction-of-Product-Sales",
        external: true,
      },
    ],
  },
  {
    id: "metabolic-syndrome",
    keywords: [
      "metabolic syndrome",
      "metabolic syndrome prediction",
      "healthcare ml",
      "healthcare machine learning",
      "nhanes",
      "clinical screening",
      "logistic regression",
      "f1",
      "recall",
      "smote",
      "medical screening",
    ],
    answer:
      "Metabolic Syndrome Prediction is a healthcare-focused machine learning project using NHANES-derived clinical and demographic data. The project focused on clinical usefulness, positive-class recall, F1-score, interpretability, and model comparison across Logistic Regression, Random Forest, and ANN experiments.",
    actions: [
      {
        label: "See Metabolic Syndrome Project",
        href: "#metabolic-syndrome-prediction",
        external: false,
      },
      {
        label: "Metabolic Syndrome GitHub",
        href: "https://github.com/MomenJabr/Metabolic-Syndrome-Prediction",
        external: true,
      },
    ],
  },
  {
    id: "chatgpt-like",
    keywords: [
      "chatgpt like",
      "chatgpt-like",
      "streamlit chat",
      "mock chat",
      "chat app",
      "streamlit app",
      "local mock",
      "no api",
      "no llm",
    ],
    answer:
      "ChatGPT-like App is a simple Streamlit chat interface built with Python. It uses st.chat_input, st.chat_message, and st.session_state.messages to manage conversation history, with local mock responses only and no external LLM or API.",
    actions: [
      {
        label: "See ChatGPT-like App",
        href: "#chatgpt-like-streamlit-app",
        external: false,
      },
      {
        label: "Open GitHub",
        href: "https://github.com/MomenJabr/chatgpt_like",
        external: true,
      },
    ],
  },
  {
    id: "github",
    keywords: ["github", "repo", "repository", "repositories", "code"],
    answer:
      "You can explore Momen's GitHub profile and project repositories through his GitHub account.",
    actions: [
      {
        label: "See Projects",
        href: "#projects",
        external: false,
      },
      {
        label: "Open GitHub",
        href: "https://github.com/MomenJabr",
        external: true,
      },
    ],
  },
  {
    id: "linkedin",
    keywords: ["linkedin", "linked in"],
    answer:
      "You can connect with Momen on LinkedIn through his professional profile.",
    actions: [
      {
        label: "Open LinkedIn",
        href: "https://www.linkedin.com/in/momen-jabr-2bb07538a/",
        external: true,
      },
    ],
  },
  {
    id: "resume",
    keywords: ["resume", "cv", "download resume", "curriculum"],
    answer:
      "You can view Momen's resume to learn more about his engineering background, data science training, technical projects, and professional experience.",
    actions: [
      {
        label: "View Resume",
        href: "/Momen-Jabr-CV.pdf",
        external: false,
      },
    ],
  },
  {
    id: "contact",
    keywords: [
      "contact",
      "email",
      "phone",
      "reach",
      "get in touch",
      "how can i contact",
    ],
    answer:
      "You can reach Momen by email or phone, or connect with him through LinkedIn and GitHub.",
    actions: [
      {
        label: "Call Momen",
        type: "phonePopup",
      },
      {
        label: "Email Momen",
        href: "mailto:jabrmomen@gmail.com",
        external: false,
      },
      {
        label: "Open LinkedIn",
        href: "https://www.linkedin.com/in/momen-jabr-2bb07538a/",
        external: true,
      },
      {
        label: "Open GitHub",
        href: "https://github.com/MomenJabr",
        external: true,
      },
    ],
  },
  {
    id: "education",
    keywords: [
      "education",
      "certification",
      "certifications",
      "bootcamp",
      "axsos",
      "university",
      "degree",
      "mechatronics",
      "data science program",
      "machine learning program",
    ],
    answer:
      "Momen holds a Bachelor's degree in Mechatronics Engineering from An-Najah National University and is completing a Data Science & Machine Learning program at AXSOS Academy, focused on Python, statistics, SQL, EDA, visualization, and applied machine learning.",
    actions: [
      {
        label: "See Education",
        href: "#education",
        external: false,
      },
    ],
  },
  {
    id: "palestinian-standards",
    keywords: [
      "palestinian standards",
      "standards institution",
      "psi",
      "engineering standards",
      "technical evaluation",
      "technical standards",
      "compliance",
      "engineering documentation",
    ],
    answer:
      "Momen works as a Mechatronics Engineer at the Palestinian Standards Institution, where he contributes to engineering standards, technical specifications, technical evaluation, and documentation across areas such as machinery, vehicles, fire safety, and fuel equipment.",
    actions: [
      {
        label: "See Experience",
        href: "#experience",
        external: false,
      },
    ],
  },
  {
    id: "availability",
    keywords: [
      "availability",
      "available",
      "hiring",
      "opportunity",
      "opportunities",
      "open to",
      "looking for",
      "job",
      "roles",
    ],
    answer:
      "Momen is open to opportunities related to data science, machine learning, business intelligence, workflow automation, and technical engineering roles where analytical thinking and engineering logic are valuable.",
    actions: [
      {
        label: "View Resume",
        href: "/Momen-Jabr-CV.pdf",
        external: false,
      },
      {
        label: "Email Momen",
        href: "mailto:jabrmomen@gmail.com",
        external: false,
      },
      {
        label: "Open LinkedIn",
        href: "https://www.linkedin.com/in/momen-jabr-2bb07538a/",
        external: true,
      },
    ],
  },
  {
    id: "skills",
    keywords: [
      "skill",
      "skills",
      "tech stack",
      "technologies",
      "technology",
      "python",
      "sql",
      "pandas",
      "numpy",
      "scikit-learn",
      "machine learning",
      "data analysis",
      "power bi",
      "tableau",
      "n8n",
      "tensorflow",
      "keras",
    ],
    answer:
      "Momen's technical skills include Python, SQL, C, Microsoft SQL Server, Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn, imbalanced-learn, TensorFlow/Keras, Jupyter Notebook, Git, GitHub, Power BI, Tableau, n8n, webhooks, APIs, and workflow automation tools.",
    actions: [
      {
        label: "See Skills",
        href: "#capabilities",
        external: false,
      },
      {
        label: "See Projects",
        href: "#projects",
        external: false,
      },
    ],
  },
  {
    id: "experience",
    keywords: [
      "experience",
      "background",
      "career",
      "work history",
      "professional",
      "engineering background",
    ],
    answer:
      "Momen combines professional experience as a Mechatronics Engineer with growing expertise in data science, machine learning, BI, and workflow automation. His background connects engineering standards, technical evaluation, structured reasoning, and applied analytics.",
    actions: [
      {
        label: "See Experience",
        href: "#experience",
        external: false,
      },
    ],
  },
  {
    id: "projects",
    keywords: [
      "project",
      "projects",
      "portfolio",
      "built",
      "case study",
      "case studies",
      "featured projects",
    ],
    answer:
      "Momen's featured projects include Prediction of Product Sales, Metabolic Syndrome Prediction, and a ChatGPT-like Streamlit App. These projects highlight regression modeling, healthcare classification, data preprocessing, model evaluation, and Streamlit interface development.",
    actions: [
      {
        label: "See Projects",
        href: "#projects",
        external: false,
      },
      {
        label: "Open GitHub",
        href: "https://github.com/MomenJabr",
        external: true,
      },
    ],
  },
];

export function findBotResponse(input) {
  const normalized = input.toLowerCase().trim();

  if (!normalized) {
    return null;
  }

  const match = botResponses.find((response) =>
    response.keywords.some((keyword) => normalized.includes(keyword)),
  );

  if (match) {
    return {
      answer: match.answer,
      actions: match.actions ?? [],
    };
  }

  return {
    answer: fallbackResponse,
    actions: [],
  };
}