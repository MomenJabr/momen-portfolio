import productSalesImage from "../../review-screenshots/product-sales.png";
import metabolicSyndromeImage from "../../review-screenshots/metabolic-syndrome.png";
import chatgptLikeImage from "../../review-screenshots/chatgpt-like.png";

export const projectsSection = {
  eyebrow: "Case Studies",
  title: "Featured Data Science Projects",
  intro:
    "Applied machine learning projects focused on data exploration, preprocessing, model evaluation, and practical decision support.",
};

export const projects = [
  {
    id: "prediction-of-product-sales",
    icon: "brokershub",
    title: "Prediction of Product Sales",
    tagline:
      "Machine learning regression workflow for predicting retail product sales.",
    overview:
      "Prediction of Product Sales is a data science project focused on analyzing historical retail data and predicting Item_Outlet_Sales. The project explores product and outlet features, identifies sales patterns, and builds predictive regression models using a full Scikit-learn workflow.",
    contribution:
      "Built the end-to-end analysis and modeling workflow, including data cleaning, exploratory data analysis, preprocessing pipelines, model training, hyperparameter tuning, and performance evaluation.",
    features: [
      "Exploratory data analysis on historical retail sales data",
      "Feature analysis for product and outlet-related variables",
      "Preprocessing pipeline using imputers, scaling, and encoding",
      "Regression modeling with Linear Regression and Random Forest",
      "Random Forest optimization using GridSearchCV",
      "Model evaluation using MAE, RMSE, and R² score",
    ],
    technicalHighlights: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Seaborn",
      "GridSearchCV",
    ],
    image: productSalesImage,
    github: "https://github.com/MomenJabr/Prediction-of-Product-Sales",
    liveDemo: null,
    previewUrl: "Machine Learning Regression",
    useIllustration: false,
  },
  {
    id: "metabolic-syndrome-prediction",
    icon: "bitemenu",
    title: "Metabolic Syndrome Prediction",
    tagline:
      "Healthcare machine learning project focused on clinically useful screening.",
    overview:
      "Metabolic Syndrome Prediction is a healthcare-focused machine learning project using NHANES-derived clinical and demographic data. The goal is to support earlier screening for metabolic syndrome while prioritizing clinical usefulness, interpretability, and balanced classification performance.",
    contribution:
      "Performed preprocessing, exploratory analysis, model comparison, and evaluation with attention to positive-class recall due to the medical screening context. The strongest overall balance came from an interpretable Logistic Regression model tuned toward F1-score.",
    features: [
      "Classification workflow using clinical and demographic health data",
      "Class distribution analysis for metabolic syndrome imbalance",
      "Correlation analysis of physical and biochemical biomarkers",
      "Model comparison across Logistic Regression, Random Forest, and ANN experiments",
      "Evaluation using precision, recall, F1-score, accuracy, and confusion matrices",
      "Focus on interpretability and clinical screening usefulness",
    ],
    technicalHighlights: [
      "Python",
      "Scikit-learn",
      "Logistic Regression",
      "Random Forest",
      "SMOTE",
      "TensorFlow/Keras",
      "Keras Tuner",
    ],
    image: metabolicSyndromeImage,
    github: "https://github.com/MomenJabr/Metabolic-Syndrome-Prediction",
    liveDemo: null,
    previewUrl: "Healthcare ML Classification",
    useIllustration: false,
  },
  {
    id: "chatgpt-like-streamlit-app",
    icon: "streamlit",
    title: "ChatGPT-like Streamlit App",
    tagline:
      "Simple local mock chat interface built with Python and Streamlit.",
    overview:
      "ChatGPT-like App is a lightweight Streamlit project that creates a basic chat interface where users can type messages and receive local mock assistant replies. The app does not use ChatGPT, any external LLM, or any API.",
    contribution:
      "Built the Streamlit chat interface, local response logic, and session-based conversation state using Streamlit's native chat components.",
    features: [
      "Chat-style interface using Streamlit",
      "User input handled with st.chat_input",
      "Messages displayed with st.chat_message",
      "Conversation history stored in st.session_state.messages",
      "Local mock assistant replies without any external API",
      "Simple Python function and conditional logic for responses",
    ],
    featuresLayout: "two-by-two",
    technicalHighlights: [
      "Python",
      "Streamlit",
      "st.chat_input",
      "st.chat_message",
      "Session State",
      "Mock Responses",
    ],
    image: chatgptLikeImage,
    github: "https://github.com/MomenJabr/chatgpt_like",
    liveDemo: null,
    previewUrl: "localhost:8501",
    useIllustration: false,
  },
];