/**
 * TENSORA 2026 - Official Problem Statements Dataset
 * 5 Themes x 4 Problems = 20 Real-World AI Challenges
 */

const CHALLENGES_DATA = [
  // ==================== THEME: TRANSPORT / INTELLIGENT MOBILITY ====================
  {
    id: "T01",
    theme: "transport",
    themeName: "Intelligent Mobility & Transport",
    themeIcon: "fa-solid fa-train-subway",
    title: "AI-Based Predictive Maintenance of Metro Compressor Units",
    tagline: "Predict air compressor failures and calculate Remaining Useful Life (RUL) before breakdowns occur.",
    difficulty: "Advanced",
    aiCategory: "Time-Series & Predictive Analytics",
    tags: ["Time-Series", "LSTM / Transformers", "Anomaly Detection", "IoT Sensors", "RUL Estimation"],
    summary: "Air compressor units in metro train braking systems operate under severe thermal and mechanical stresses. Unexpected compressor failure causes emergency braking and operational gridlock. Teams must build an AI pipeline using real-world multi-sensor time-series data to detect anomalous degradation patterns and forecast remaining useful operating hours with high precision.",
    problemScope: "Metro operators rely on reactive or scheduled maintenance which is either too late or unnecessarily costly. Sensor logs capture vibration, oil pressure, motor temperature, cylinder pressure, and electrical current drawn. The objective is to construct an end-to-end anomaly detection and RUL forecasting engine with false-positive mitigation.",
    aiRequirements: [
      "Deep learning or ensemble time-series model (e.g. Temporal Convolutional Networks, LSTM, PatchTST, or XGBoost on engineered lag features).",
      "Dynamic thresholding algorithm for anomaly scoring in noisy industrial sensor telemetry.",
      "Explainability module (SHAP / Integrated Gradients) identifying which sensor signals triggered the failure warning."
    ],
    deliverables: [
      "Predictive modeling pipeline with evaluated RMSE/MAE and precision-recall curves.",
      "Interactive engineer dashboard showing real-time health index of compressor units.",
      "Automated maintenance dispatch alert system with recommended intervention time."
    ],
    sampleDatasets: ["Metro PT Compressor Dataset (Kaggle/UCI)", "NASA Turbofan Engine Degradation Simulation (C-MAPSS)"]
  },
  {
    id: "T02",
    theme: "transport",
    themeName: "Intelligent Mobility & Transport",
    themeIcon: "fa-solid fa-car-burst",
    title: "Edge-AI Driver Distraction & Drowsiness Prevention",
    tagline: "Real-time edge computer vision to detect cognitive fatigue, eye closure, and phone usage.",
    difficulty: "Intermediate",
    aiCategory: "Computer Vision & Edge AI",
    tags: ["Computer Vision", "YOLOv8/v11", "Facial Landmarks", "Edge AI", "EAR/MAR Analysis"],
    summary: "Commercial and private vehicle accidents frequently result from microsleep, driver drowsiness, and smartphone distractions. Teams must build a lightweight, low-latency edge AI system that detects eye-aspect ratio (EAR), mouth-opening ratio (MAR), head gaze drift, and device usage in varying lighting conditions.",
    problemScope: "Existing driver monitoring systems struggle with low illumination, sunglasses, and extreme computational overhead. Solutions must run smoothly on edge hardware (e.g., Raspberry Pi, Jetson Nano, or standard mobile/laptop webcams at 30+ FPS) while ensuring zero biometric privacy leakage.",
    aiRequirements: [
      "Facial landmark tracking and head pose estimation pipeline (MediaPipe, OpenCV, or custom CNNs).",
      "Object detection model optimized for hand-held smartphone and cigarette detection.",
      "Temporal smoothing classifier to distinguish intentional glances from micro-sleep episodes."
    ],
    deliverables: [
      "Working real-time live webcam/video demonstration.",
      "Auditory and visual multi-level alert dashboard with distraction logging.",
      "Optimized lightweight inference pipeline (ONNX / TensorRT / TFLite)."
    ],
    sampleDatasets: ["State Farm Distracted Driver Detection (Kaggle)", "Driver Drowsiness Dataset (DDD)", "NTHU Driver Drowsiness Video Dataset"]
  },
  {
    id: "T03",
    theme: "transport",
    themeName: "Intelligent Mobility & Transport",
    themeIcon: "fa-solid fa-plane-departure",
    title: "Flight Schedule & Gate Allocation Optimizer for Congested Hubs",
    tagline: "Reinforcement learning and graph AI to minimize runway delays, gate conflicts, and carbon burn.",
    difficulty: "Advanced",
    aiCategory: "Reinforcement Learning & Graph AI",
    tags: ["Reinforcement Learning", "Graph Neural Networks", "Combinatorial Optimization", "Aviation"],
    summary: "Air traffic congestion at major international and domestic hubs leads to cascading departure delays, excessive apron idling, and thousands of tons of avoidable jet fuel emissions. Build an AI-driven optimization system that re-sequences departure taxi queues and dynamically reallocates airport arrival gates during weather disruptions.",
    problemScope: "A single delayed flight ripples across subsequent sector rotations. The challenge requires processing multi-airline flight schedules, runway turnarounds, gate constraints, and historical delay matrices to compute optimal conflict-free assignments in under 60 seconds.",
    aiRequirements: [
      "Constraint-aware Reinforcement Learning agent (PPO/DQN) or Graph Neural Network (GNN) model.",
      "Delay propagation predictor using historical aviation flight matrices.",
      "Dynamic re-routing optimizer capable of simulating gate swap scenarios."
    ],
    deliverables: [
      "Flight simulation testbed demonstrating turnaround throughput improvements.",
      "Interactive gate schedule heatmap and runway taxiway dispatcher view.",
      "Comparative metrics showing simulated reduction in idle taxi emissions and passenger missed connections."
    ],
    sampleDatasets: ["Bureau of Transportation Statistics (BTS) Flight Delay Database", "OpenSky Network Historical Flight Traces"]
  },
  {
    id: "T04",
    theme: "transport",
    themeName: "Intelligent Mobility & Transport",
    themeIcon: "fa-solid fa-paw",
    title: "Human-Wildlife Conflict Mitigation on Railway Corridors",
    tagline: "Multi-sensory acoustic and thermal vision system for early elephant and wildlife track trespass alerts.",
    difficulty: "Intermediate",
    aiCategory: "Multimodal AI & Acoustic Vision",
    tags: ["Multimodal AI", "Thermal Imaging", "Bioacoustic AI", "Geofencing", "Railway Safety"],
    summary: "High-speed train collisions with elephants and other endangered wildlife along forest corridors cause severe ecological loss and derailment dangers. Develop an automated trackside AI sentinel system that combines thermal camera feeds with seismic/acoustic sensor processing to identify approaching herds 500m+ ahead and send automated locomotive braking alerts.",
    problemScope: "Dense foliage, heavy nighttime fog, and harsh outdoor railway environments render standard optical cameras ineffective. The system must filter out false positives (e.g., wind, cattle, small mammals) and trigger instant geofenced alerts to nearby loco pilots and station master consoles.",
    aiRequirements: [
      "Thermal / Infrared object detection pipeline specialized for large mammal silhouettes.",
      "Audio spectrogram / seismic wave classifier for seismic footfall and trumpet vocalization detection.",
      "Sensor fusion engine delivering confidence-calibrated telemetry alerts to the train crew."
    ],
    deliverables: [
      "Multimodal inference pipeline supporting thermal video and audio input streams.",
      "Station Master & Locomotive Pilot Telemetry Dashboard with automated warning sirens and maps.",
      "False-alarm resistance benchmark against ambient environmental noise."
    ],
    sampleDatasets: ["WildTrack Footprint & Silhouette Dataset", "Elephant Seismic & Infrasonic Audio Archives", "Kaggle Thermal Wildlife Video Sets"]
  },

  // ==================== THEME: EDUCATION / AI FOR LEARNING ====================
  {
    id: "E01",
    theme: "education",
    themeName: "AI for Education",
    themeIcon: "fa-solid fa-code",
    title: "CodeAI — Interactive DSA & Algorithmic Visual Tutor",
    tagline: "AI tutor that steps through student code, visualizes memory pointers, and provides Socratic debugging guidance.",
    difficulty: "Intermediate",
    aiCategory: "Generative AI & LLM Systems",
    tags: ["LLM Agents", "AST Analysis", "Code Visualization", "DSA", "Socratic Prompting"],
    summary: "Computer science students frequently struggle to grasp abstract Data Structures & Algorithms (such as recursion trees, dynamic programming tables, and linked list pointer mutations). CodeAI parses arbitrary C++/Java/Python snippets, generates step-by-step visual animation trees, and uses a guided LLM tutor that never gives direct answers, but instead asks diagnostic Socratic questions.",
    problemScope: "Generic generative AI tools simply spit out complete answers, depriving students of deep algorithmic reasoning and problem-solving intuition. CodeAI must perform static AST syntax tree parsing, simulate execution memory frames, and provide interactive contextual guidance.",
    aiRequirements: [
      "LLM agent orchestrator with custom Socratic pedagogical system prompts.",
      "AST (Abstract Syntax Tree) extractor mapping state mutations across lines of code.",
      "Complexity analyzer generating asymptotic Big-O runtime and space bound breakdowns."
    ],
    deliverables: [
      "Full web IDE with split-pane code editor, execution visualizer, and AI chat tutor.",
      "Interactive pointer mutation diagram for linked lists/trees/graphs.",
      "Student learning analytics panel highlighting conceptual bottlenecks."
    ],
    sampleDatasets: ["HumanEval & MBPP Benchmark Datasets", "LeetCode Algorithmic Problem Ontologies", "CodeNet Multi-Language AST Datasets"]
  },
  {
    id: "E02",
    theme: "education",
    themeName: "AI for Education",
    themeIcon: "fa-solid fa-language",
    title: "LangPairAI — Contextual Vernacular Language Learning",
    tagline: "Culturally-grounded regional language adaptation with dialect nuance, voice cloning, and idiom translation.",
    difficulty: "Intermediate",
    aiCategory: "Natural Language Processing",
    tags: ["NLP", "Indian Vernacular Languages", "ASR / TTS", "Cultural Translation", "LLMs"],
    summary: "Direct literal machine translation fails catastrophically when applied to vernacular Indian regional idioms, slang, and cultural context (such as colloquial Tamil, Telugu, Hindi, or Malayalam phrases). LangPairAI delivers immersive conversational language learning through real-time speech evaluation, dialect mapping, and contextual cultural storytelling.",
    problemScope: "Language learners need more than flashcard vocabulary drills; they need conversational roleplay with phonetic feedback, pronunciation scoring, and situational context (ordering street food, bargaining, academic discussions).",
    aiRequirements: [
      "Fine-tuned multilingual translation model (IndicTrans2, Llama-3-Indic, or Whisper Indic fine-tunes).",
      "Phoneme-level speech pronunciation evaluation using ASR acoustic scoring.",
      "Dynamic conversational agent roleplaying real-world cultural scenarios with adaptive difficulty."
    ],
    deliverables: [
      "Interactive speech-to-speech learning web/mobile interface.",
      "Real-time pronunciation waveform and phonetic accuracy visualizer.",
      "Contextual idiom dictionary with cultural origins and usage examples."
    ],
    sampleDatasets: ["AI4Bharat IndicTrans2 & IndicWhisper Corpus", "Bhashini Open Indic Speech Datasets", "Common Voice Indic Subsets"]
  },
  {
    id: "E03",
    theme: "education",
    themeName: "AI for Education",
    themeIcon: "fa-solid fa-hands-asl-interpreting",
    title: "GestureLearnAI — Vision-Based Sign Language & Gesture Tutoring",
    tagline: "Two-way sign language recognition and educational translation for inclusive classroom learning.",
    difficulty: "Advanced",
    aiCategory: "Computer Vision & Spatial AI",
    tags: ["Indian Sign Language (ISL)", "MediaPipe Hands", "Spatial AI", "Bi-Directional Translation", "Accessibility"],
    summary: "Millions of deaf and hard-of-hearing students face communication barriers in standard educational institutions. GestureLearnAI provides two-way translation: converting spoken classroom lectures into animated 3D sign language gestures in real time, while utilizing webcam spatial recognition to evaluate students practicing sign gestures.",
    problemScope: "Continuous dynamic sign recognition requires tracking finger micro-gestures, facial expressions, and spatial body posture across time rather than merely classifying static alphabet hand-poses.",
    aiRequirements: [
      "Continuous 3D skeletal hand and facial landmark spatial tracking (MediaPipe / OpenPose).",
      "Spatial-Temporal Graph Convolutional Network (ST-GCN) or Transformer for continuous gesture sequence decoding.",
      "Text-to-Sign animation synthesis engine translating academic curriculum vocabulary into ISL."
    ],
    deliverables: [
      "Two-way live video-to-text and text-to-avatar sign synthesis platform.",
      "Interactive practice module with immediate skeletal overlay corrections.",
      "Curriculum-ready glossary covering STEM and academic concepts in Indian Sign Language."
    ],
    sampleDatasets: ["INCLUDE Indian Sign Language Dataset", "Sign3D Skeletal Landmark Corpus", "WLASL (World Level American Sign Language)"]
  },
  {
    id: "E04",
    theme: "education",
    themeName: "AI for Education",
    themeIcon: "fa-solid fa-file-circle-check",
    title: "AI-Powered Optical Mark & Handwritten Exam Sheet Evaluator",
    tagline: "Robust mobile-camera OMR grading and handwritten step-mark verification with fraud detection.",
    difficulty: "Intermediate",
    aiCategory: "Document AI & Computer Vision",
    tags: ["Document AI", "OCR", "Perspective Correction", "Automated Grading", "Tamper Detection"],
    summary: "Manual evaluation of standardized competitive examinations and college test sheets is labor-intensive and prone to human grading errors, skew distortions, and lighting shadows. This challenge requires building an automated grading system that corrects perspective distortion from smartphone camera captures, evaluates bubbles and handwritten numerical answers, and outputs instant grade sheets.",
    problemScope: "Hardware OMR scanners cost thousands of dollars and require pristine flat sheets. Rural colleges and small institutions need a software solution that works reliably on crumpled paper photos captured with basic smartphones under uneven lighting.",
    aiRequirements: [
      "Automated document boundary detection, perspective homography rectification, and shadow removal.",
      "Bubble fill density classifier robust against partial erasures and ink bleeds.",
      "Handwritten digit and math step verification engine (CRNN / TrOCR) with confidence thresholding."
    ],
    deliverables: [
      "Batch image upload and instant score calculation dashboard.",
      "Interactive inspection tool highlighting ambiguous marks for manual teacher review.",
      "Automated Excel / CSV grade report generator with statistical analytics."
    ],
    sampleDatasets: ["OpenOMR Form Image Benchmark Sets", "IAM Handwriting Database", "Synthetic Distorted Sheet Generator Dataset"]
  },

  // ==================== THEME: AGRICULTURE / AGRITECH ====================
  {
    id: "A01",
    theme: "agriculture",
    themeName: "AgriTech & Rural Innovation",
    themeIcon: "fa-solid fa-seedling",
    title: "Multispectral AI Crop Disease & Severity Quantification",
    tagline: "Detect foliar crop pathogens, estimate infected surface area, and suggest organic treatments in regional languages.",
    difficulty: "Intermediate",
    aiCategory: "Computer Vision & Edge AI",
    tags: ["Computer Vision", "Semantic Segmentation", "Plant Pathology", "Vernacular Advisory", "Edge AI"],
    summary: "Crop disease outbreaks destroy up to 30% of agricultural yields annually before smallholder farmers identify the underlying pathogen. Build an offline-first mobile AI vision application that identifies plant diseases from leaf photos, segments the infected surface area to calculate severity percentage, and generates tailored organic/chemical treatment advisories in local languages.",
    problemScope: "Field conditions feature extreme variations: direct sunlight glare, shadows, cluttered soil backgrounds, and multiple concurrent diseases on a single leaf. The AI must isolate the plant leaf, diagnose fungal/bacterial/viral blights, and provide actionable dosage calculations based on land acreage.",
    aiRequirements: [
      "Fine-grained CNN / Vision Transformer classifier (EfficientNet, ConvNeXt, Swin) for multi-class foliar pathology.",
      "Semantic segmentation model (YOLO-Seg or U-Net) to quantify percentage surface necrosis.",
      "Offline inference pipeline and vernacular multilingual text/voice generation for regional farmers."
    ],
    deliverables: [
      "Offline-capable web/mobile progressive web app.",
      "Leaf inspection visualizer highlighting disease clusters with bounding boxes and segment masks.",
      "Acreage-based treatment calculation engine with local fertilizer/pesticide recommendations."
    ],
    sampleDatasets: ["PlantVillage Benchmark Dataset (54,000+ images)", "New Plant Diseases Dataset (Kaggle)", "ICAR Indian Crop Pathology Repositories"]
  },
  {
    id: "A02",
    theme: "agriculture",
    themeName: "AgriTech & Rural Innovation",
    themeIcon: "fa-solid fa-flask-vial",
    title: "AI-Powered Soil Health Analysis & Crop Recommendation Engine",
    tagline: "Multi-parameter NPK, pH, climate, and soil moisture analytics for optimal yield and crop rotation.",
    difficulty: "Intermediate",
    aiCategory: "Machine Learning & Decision Systems",
    tags: ["XGBoost / LightGBM", "Soil Chemistry", "Crop Yield Prediction", "Agro-Climatology", "Fertilizer Optimizer"],
    summary: "Imbalanced chemical fertilizer application degrades soil microbiome health and reduces farmer profitability. Develop an AI agro-advisory system that correlates laboratory NPK values, soil electrical conductivity, geographic climate forecasts, and historical crop yields to prescribe optimal seed selections, fertilizer schedules, and multi-season crop rotation plans.",
    problemScope: "Farmers need actionable advice that takes economic market price forecasts, local water availability, and historical seasonal rain patterns into account rather than generic textbook recommendations.",
    aiRequirements: [
      "Supervised ensemble regression & classification models (XGBoost, CatBoost, Random Forest).",
      "Dynamic fertilizer dosage calculator optimizing for minimum cost and maximum nutrient absorption.",
      "Crop rotation recommendation engine using reinforcement learning or constraint satisfaction programming."
    ],
    deliverables: [
      "Interactive farmer portal with simple NPK sliders, soil card scan input, and GPS weather integration.",
      "Visual Soil Health Card with nutrient deficiency radar chart and remediation steps.",
      "Profit & Yield simulator comparing 3 alternative crop cultivation strategies."
    ],
    sampleDatasets: ["ICAR Soil Health Card Dataset", "Crop Recommendation Dataset (Kaggle)", "NASA POWER Agro-Climatology Meteorological Records"]
  },
  {
    id: "A03",
    theme: "agriculture",
    themeName: "AgriTech & Rural Innovation",
    themeIcon: "fa-solid fa-cow",
    title: "DairyAI — Cattle Health, Milk Yield & Quality Prediction",
    tagline: "Computer vision cattle muzzle biometrics, thermal mastitis detection, and lactation curve forecasting.",
    difficulty: "Advanced",
    aiCategory: "Multimodal AI & Agri-Vision",
    tags: ["Computer Vision", "Cattle Biometrics", "Mastitis Detection", "Lactation Forecasting", "Dairy Tech"],
    summary: "Bovine mastitis and sub-optimal feed nutrition cause massive financial loss in dairy cooperatives. DairyAI integrates facial/muzzle biometric cow identification, thermal imaging for early udder inflammation detection, and historical milking logs to predict daily yield and flag early subclinical sickness.",
    problemScope: "Traditional cattle tagging is prone to loss or tampering. Automated non-invasive muzzle pattern recognition combined with thermal computer vision provides early detection of inflammatory disease days before milk contamination occurs.",
    aiRequirements: [
      "Muzzle pattern / facial biometric recognition model (Siamese CNN / Triplet Loss Network).",
      "Thermal image anomaly segmentation for early udder inflammation and mastitis detection.",
      "Time-series lactation curve forecasting model (Prophet / DeepAR / LSTM)."
    ],
    deliverables: [
      "Farm management dashboard showing individual cattle health cards and yield projections.",
      "Thermal scan upload and automated mastitis heat map classifier.",
      "Feed nutrition optimizer tailored to lactation cycle stage."
    ],
    sampleDatasets: ["Open Muzzle Print Biometric Database", "Thermal Imaging Bovine Mastitis Dataset", "Cooperative Dairy Milking Records"]
  },
  {
    id: "A04",
    theme: "agriculture",
    themeName: "AgriTech & Rural Innovation",
    themeIcon: "fa-solid fa-satellite",
    title: "Satellite & Drone Weed Density Mapping for Precision Spraying",
    tagline: "High-resolution multispectral imagery segmentation to guide autonomous drone spraying and reduce pesticide runoff.",
    difficulty: "Advanced",
    aiCategory: "Remote Sensing & Geospatial AI",
    tags: ["Geospatial AI", "Sentinel-2 / Drone Imagery", "NDVI Indices", "Weed Segmentation", "Precision Agriculture"],
    summary: "Blanket pesticide spraying wastes up to 70% of chemical agrochemicals into the water table. Build an AI geospatial mapping tool that ingests drone and high-res satellite multispectral imagery (NDVI/NDRE), distinguishes crop canopies from aggressive weed infestations, and outputs precise GPS-tagged prescription spraying maps for agricultural drones.",
    problemScope: "Weeds and young cash crops share very similar spectral signatures and green color palettes. The challenge requires spatial texture segmentation and multispectral band mathematical analysis to pinpoint weed clusters.",
    aiRequirements: [
      "Deep semantic segmentation network (DeepLabV3+, SegFormer, or YOLO-NAS-Seg) trained on multispectral crop/weed aerial imagery.",
      "NDVI / NDRE vegetation index calculation and spatial clustering pipeline.",
      "GeoTIFF export engine generating GeoJSON prescription flight paths for DJI / open-source agricultural drones."
    ],
    deliverables: [
      "Interactive map dashboard allowing farmers to upload drone imagery and draw field boundaries.",
      "Color-coded weed infestation heatmap with calculated chemical volume savings.",
      "Downloadable GeoJSON / KML flight mission waypoint file for autonomous drone sprayers."
    ],
    sampleDatasets: ["Crop/Weed Field Image Dataset (CWFID)", "DeepWeeds Drone Aerial Benchmark", "Sentinel-2 Multi-Spectral Agricultural Tiles"]
  },

  // ==================== THEME: HEALTHCARE / AI FOR HEALTH & WELLBEING ====================
  {
    id: "H01",
    theme: "healthcare",
    themeName: "AI for Health & Wellbeing",
    themeIcon: "fa-solid fa-pills",
    title: "Prescription Risk & Drug-Drug Interaction Sentinel",
    tagline: "OCR handwritten prescriptions, cross-reference contraindications, and flag dangerous drug interactions.",
    difficulty: "Intermediate",
    aiCategory: "NLP & Biomedical Knowledge Graphs",
    tags: ["Biomedical NLP", "Knowledge Graphs", "Drug Interactions", "Prescription OCR", "Patient Safety"],
    summary: "Adverse Drug Reactions (ADRs) and unintended contraindications cause thousands of emergency hospital admissions. This system extracts handwritten and printed doctor prescriptions via OCR, parses medication names and dosages, queries biomedical knowledge graphs, and flags severe drug-drug interactions, allergy risks, and kidney/liver dosage contraindications.",
    problemScope: "Doctor handwriting is notoriously illegible and drug brand names frequently differ by only a single character from completely different pharmaceutical compounds. The AI must use fuzzy phonetics and clinical context to disambiguate medication names accurately.",
    aiRequirements: [
      "Specialized Medical OCR engine (fine-tuned TrOCR or Donut model) for clinical prescriptions.",
      "Biomedical Entity Extraction and Normalization (BioBERT / ClinicalBERT) mapped to RxNorm / SNOMED-CT.",
      "Graph-based drug-drug and drug-condition interaction inference engine."
    ],
    deliverables: [
      "Prescription scan interface with extracted medicine breakdown and confidence indicators.",
      "Color-coded Risk Matrix (Mild, Moderate, Severe, Life-Threatening) with clinical citations.",
      "Patient-friendly dosage schedule generator with dietary warnings (e.g. avoid grapefruit, take after meals)."
    ],
    sampleDatasets: ["DrugBank Open Interaction Dataset", "RxNorm Knowledge Base", "Kaggle Medical Prescription Handwriting Corpus"]
  },
  {
    id: "H02",
    theme: "healthcare",
    themeName: "AI for Health & Wellbeing",
    themeIcon: "fa-solid fa-x-ray",
    title: "Intelligent Radiology Anomaly Localization (Chest X-Ray & CT)",
    tagline: "Multi-class pulmonary pathology detection with Grad-CAM visual heatmaps and radiologist preliminary reporting.",
    difficulty: "Advanced",
    aiCategory: "Medical Computer Vision & Explainable AI",
    tags: ["Medical Imaging", "Grad-CAM Explainability", "Chest X-Ray", "Pneumonia / TB Detection", "DICOM"],
    summary: "Overburdened hospital radiology departments face severe backlogs in reviewing emergency chest radiographs. Develop a computer vision diagnostic triage system capable of classifying 14 common thoracic abnormalities (including Pneumonia, Pneumothorax, Tuberculosis, Cardiomegaly, and Effusions) while generating Grad-CAM explainability heatmaps for clinical validation.",
    problemScope: "Black-box AI is unacceptable in clinical workflows. The AI must not only predict probabilities, but also pinpoint the exact anatomical bounding region and generate structured preliminary radiologist reports conforming to standard clinical terminology.",
    aiRequirements: [
      "Multi-label Deep Vision Architecture (DenseNet-121, Vision Transformer, or Swin-UNETR).",
      "Explainable AI heatmap generator (Grad-CAM++ / Score-CAM) overlaid on high-resolution DICOM images.",
      "Structured preliminary report generator translating findings into standardized BI-RADS / RadLex format."
    ],
    deliverables: [
      "Web DICOM/X-Ray viewer with interactive opacity slider for anomaly heatmaps.",
      "Multi-label risk assessment panel with calibrated confidence metrics.",
      "Downloadable clinical PDF preliminary report highlighting urgent triage alerts."
    ],
    sampleDatasets: ["NIH ChestX-ray14 Benchmark Dataset", "CheXpert Dataset (Stanford ML Group)", "RSNA Pneumonia Detection Challenge"]
  },
  {
    id: "H03",
    theme: "healthcare",
    themeName: "AI for Health & Wellbeing",
    themeIcon: "fa-solid fa-bowl-food",
    title: "NutritionAI — Vision-Based Food Plate Calorie & Diet Planner",
    tagline: "Estimate portion sizes, macro/micronutrients from food photos, and create personalized diabetic/cardiac meal plans.",
    difficulty: "Intermediate",
    aiCategory: "Computer Vision & Personal Health AI",
    tags: ["Food Vision", "Volume Estimation", "Nutritional AI", "Diabetic Diet Planning", "Personalized Health"],
    summary: "Managing chronic lifestyle conditions such as Type-2 Diabetes and hypertension requires meticulous daily dietary tracking. NutritionAI utilizes multi-food segmentation and depth-assisted volume estimation to identify dishes from meal photos (including complex Indian gravies, curries, rotis, and rice), estimate calories and macronutrients, and suggest personalized swaps.",
    problemScope: "South Asian meals consist of mixed, semi-solid dishes with indistinct boundaries. The model must segment multiple items on a single thali/plate, estimate approximate depth/density, and compute glycemic load index.",
    aiRequirements: [
      "Multi-food instance segmentation model (Mask R-CNN or YOLOv8-Seg fine-tuned on South Asian food datasets).",
      "Monocular depth estimation network for portion volume and gram weight approximation.",
      "Personalized nutrition recommendation engine tailored to user biometric goals (HbA1c, lipid profile, weight loss)."
    ],
    deliverables: [
      "Interactive meal snap camera app with instant bounding box ingredient tagging.",
      "Nutrition breakdown card showing Calories, Carbs, Protein, Fats, Fiber, and Glycemic Index.",
      "Weekly automated meal calendar with healthy regional substitutes."
    ],
    sampleDatasets: ["Food201 & Indian Food Image Dataset (Kaggle)", "Nutrition5k Benchmark Volume Dataset", "USDA FoodData Central Database"]
  },
  {
    id: "H04",
    theme: "healthcare",
    themeName: "AI for Health & Wellbeing",
    themeIcon: "fa-solid fa-brain",
    title: "AI-Based Non-Invasive Early Detection of Parkinson's Disease",
    tagline: "Multimodal biomarker analysis of acoustic voice tremors, spiral drawing kinetics, and keystroke dynamics.",
    difficulty: "Advanced",
    aiCategory: "Multimodal Biomarkers & Signal Processing",
    tags: ["Biomarkers", "Signal Processing", "Vocal Tremor Analysis", "Kinematic Handwriting", "Early Neuro-Diagnosis"],
    summary: "Early motor and vocal symptoms of Parkinson's disease often appear years before irreversible dopamine neuron loss. This project builds a non-invasive screening suite that analyzes acoustic voice recordings (sustained vowel phonation jitter, shimmer, pitch perturbation), touchscreen spiral drawing kinematics (velocity and tremor variation), and typing latency patterns.",
    problemScope: "Clinical neurological evaluations are costly and inaccessible to rural populations. A non-invasive screening tool allows self-administered remote evaluations on ordinary smartphones to flag early neurodegenerative indicators for physician referral.",
    aiRequirements: [
      "Acoustic feature extractor (Mel-spectrograms, MFCCs, Jitter, Shimmer) evaluated with 1D-CNN / SVM ensemble.",
      "Kinematic handwriting analysis engine tracking pen velocity, acceleration, and curvature entropy on digital canvas.",
      "Multimodal fusion classifier calculating unified Parkinsonian Motor Symptom Risk Index."
    ],
    deliverables: [
      "Interactive digital patient testing portal with voice recording module and drawing canvas.",
      "Real-time signal analysis dashboard displaying vocal tremor spectrograms and pen stroke jitter graphs.",
      "Comprehensive neurological risk summary report for medical practitioners."
    ],
    sampleDatasets: ["Oxford Parkinson's Disease Voice Dataset (UCI)", "HandPD Spiral & Meander Drawing Dataset", "Tappy Keystroke Dynamics Parkinson's Corpus"]
  },

  // ==================== THEME: SUSTAINABLE ENERGY, CLIMATE & SAFETY ====================
  {
    id: "S01",
    theme: "climate",
    themeName: "Climate, Energy & Safety",
    themeIcon: "fa-solid fa-solar-panel",
    title: "AI Solar & Wind Renewable Generation Forecasting",
    tagline: "Hyper-local weather forecasting and irradiance models to predict renewable power generation and optimize grid storage.",
    difficulty: "Advanced",
    aiCategory: "Time-Series & Spatio-Temporal AI",
    tags: ["Spatio-Temporal AI", "Renewable Energy", "Solar Irradiance", "Grid Stability", "Weather Forecasting"],
    summary: "The intermittent nature of solar irradiance and wind velocity causes severe grid instability and curtailment of green energy. Build an AI-driven forecasting platform that integrates satellite cloud motion vectors, historical SCADA turbine/inverter telemetry, and numerical weather predictions to forecast next 15-minute to 48-hour renewable power generation.",
    problemScope: "Sudden cloud cover causes rapid ramp-down events that require power grid operators to spin up expensive coal or gas reserve plants. Accurate short-term hyper-local forecasting minimizes reserve spinning costs and maximizes battery storage efficiency.",
    aiRequirements: [
      "Spatio-temporal neural network (ConvLSTM, Graph Neural Network, or Temporal Fusion Transformer).",
      "Satellite cloud vector tracking engine predicting cloud shadow transit across solar farms.",
      "Battery energy storage system (BESS) charge-discharge scheduling optimizer."
    ],
    deliverables: [
      "Interactive power generation forecast dashboard with confidence interval bands.",
      "Ramp-rate alert system warning grid dispatchers of sudden drops 30 minutes in advance.",
      "BESS battery dispatch simulation showing financial arbitrage and reduced curtailment."
    ],
    sampleDatasets: ["NREL National Solar Radiation Database (NSRDB)", "Renewable Power SCADA Generation Dataset (Kaggle)", "NOAA Global Forecast System (GFS) Meteorological Feeds"]
  },
  {
    id: "S02",
    theme: "climate",
    themeName: "Climate, Energy & Safety",
    themeIcon: "fa-solid fa-smog",
    title: "Industrial Carbon Footprint Tracking & ESG Optimization",
    tagline: "Automated Scope 1, 2, and 3 carbon accounting with supply-chain emission anomaly detection and reduction modeling.",
    difficulty: "Intermediate",
    aiCategory: "Data Science & Optimization",
    tags: ["Carbon Accounting", "ESG Analytics", "Scope 1/2/3", "Supply Chain", "Optimization"],
    summary: "Enterprises face stringent global sustainability regulations and carbon taxes. Develop an automated carbon emissions intelligence platform that ingests raw utility bills, IoT factory energy meters, fuel logs, and logistics invoices to calculate standardized greenhouse gas (GHG) Scope 1, 2, and 3 emissions, detect leakage anomalies, and prescribe cost-effective abatement strategies.",
    problemScope: "Scope 3 supply-chain emissions are notoriously fragmented and difficult to measure. The AI must extract emissions factors from vendor invoices, audit anomalous emissions spikes, and simulate ROI on renewable retrofits.",
    aiRequirements: [
      "Document AI pipeline extracting energy, logistics, and material usage figures from heterogeneous supplier invoices.",
      "GHG Protocol emission factor mapping engine using international carbon databases.",
      "Prescriptive optimization algorithm simulating carbon reduction pathways (MACC curves - Marginal Abatement Cost Curves)."
    ],
    deliverables: [
      "Interactive corporate carbon accounting dashboard with Scope 1/2/3 visual breakdown.",
      "Anomaly detection feed flagging unexpected factory emissions spikes.",
      "Interactive 'What-If' simulator modeling financial cost vs CO2 emissions saved across operational changes."
    ],
    sampleDatasets: ["EPA GHG Emission Factors Hub", "UK DEFRA Conversion Factors Database", "Synthetic Industrial Manufacturing Energy Telemetry"]
  },
  {
    id: "S03",
    theme: "climate",
    themeName: "Climate, Energy & Safety",
    themeIcon: "fa-solid fa-hard-hat",
    title: "AI Worker Safety & PPE Compliance Vision Sentinel",
    tagline: "Real-time CCTV vision pipeline detecting helmet, vest, harness compliance, and hazardous zone incursions.",
    difficulty: "Intermediate",
    aiCategory: "Computer Vision & Edge AI",
    tags: ["Computer Vision", "PPE Detection", "Industrial Safety", "Hazardous Geofencing", "Edge Deployment"],
    summary: "Industrial construction sites and manufacturing shop floors witness thousands of workplace injuries due to non-compliance with Personal Protective Equipment (PPE) and unauthorized entry into heavy machinery danger zones. Create a real-time CCTV AI sentinel that identifies hard hats, safety vests, boots, goggles, and dangerous fall risks in industrial environments.",
    problemScope: "Harsh lighting, occlusions, varying worker poses, and heavy dust in industrial environments cause standard detectors to miss violations. The AI must run locally on edge hardware with zero video data leaving the factory network.",
    aiRequirements: [
      "Real-time multi-class object detection model (YOLOv8/v11 or RT-DETR) detecting helmets, hi-vis vests, goggles, and safety harnesses.",
      "Dynamic polygon geofencing engine monitoring restricted heavy-machinery operating zones.",
      "Automated incident alert trigger with privacy-preserving face blurring for worker dignity."
    ],
    deliverables: [
      "Live multi-camera stream monitoring interface with instant bounding box overlays.",
      "Safety Compliance Scorecard tracking department-wise violation frequency.",
      "Real-time siren / SMS alert trigger when an unequipped worker crosses a designated hazard perimeter."
    ],
    sampleDatasets: ["Pictor PPE Industrial Dataset (Kaggle)", "Construction Site Safety Image Database (CHUK)", "Worker Geofence & Fall Detection Video Corpus"]
  },
  {
    id: "S04",
    theme: "climate",
    themeName: "Climate, Energy & Safety",
    themeIcon: "fa-solid fa-bolt",
    title: "GridWise — Smart Campus Energy Consumption & Load Balancer",
    tagline: "Non-Intrusive Load Monitoring (NILM) and AI HVAC/lighting optimization to slash institutional power waste.",
    difficulty: "Intermediate",
    aiCategory: "Machine Learning & Energy Analytics",
    tags: ["NILM", "Smart Grid", "Energy Analytics", "Peak Load Shaving", "Campus Sustainability"],
    summary: "Educational institutions and enterprise campuses waste substantial power through unoptimized central HVAC cooling, unmonitored server rooms, and empty classroom illumination during off-peak hours. GridWise implements Non-Intrusive Load Monitoring (NILM) on aggregate electrical sub-meters to disaggregate appliance-level consumption and dynamically orchestrate load-shedding schedules.",
    problemScope: "Installing smart power meters on every individual air conditioner or lab appliance is prohibitively expensive. NILM uses high-frequency total power signature decomposition to determine which appliances are active without per-device sensors.",
    aiRequirements: [
      "Signal disaggregation model (Seq2Seq / 1D-CNN / Factorial Hidden Markov Model) for Non-Intrusive Load Monitoring.",
      "Campus energy demand forecaster modeling occupancy schedules and ambient temperature.",
      "Automated peak-shaving recommendation engine shifting deferrable electrical loads to off-peak tariff periods."
    ],
    deliverables: [
      "Campus electrical energy breakdown dashboard with live department sub-meter analytics.",
      "Appliance-level power usage breakdown extracted from a single aggregate meter.",
      "Automated energy-saving schedule calculator predicting annual kilowatt-hour (kWh) and cost reductions."
    ],
    sampleDatasets: ["UK-DALE Energy Disaggregation Dataset", "REDD (Reference Energy Disaggregation Data Set)", "Open Institutional Building Smart Meter Telemetry"]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CHALLENGES_DATA };
}
