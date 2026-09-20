/**
 * TENSORA 2026 - Official Problem Statements Dataset
 * Extracted from official hackathon document: problem statement for hackathon techgenio 2k26.docx
 * 5 Strategic Domains x 5 Challenges = 25 Real-World AI Challenges
 * Tracks: Transport, Healthcare, Education, Agriculture, Sustainable
 */

const CHALLENGES_DATA = [
  // =========================================================================
  // 1. TRACK: TRANSPORT
  // =========================================================================
  {
    id: "TRN-01",
    theme: "transport",
    themeName: "Transport",
    themeIcon: "fa-solid fa-train-subway",
    title: "Station Congestion and Charging Delays",
    tagline: "Dynamic AI queue orchestration and slot reallocation for electric vehicle charging infrastructure.",
    aiCategory: "Predictive AI & Dynamic Scheduling",
    tags: ["EV Charging", "Smart Mobility", "Queue Optimization", "Dynamic Scheduling", "Predictive Routing"],
    summary: "Electric vehicle drivers frequently head toward the same open charging point at once, causing sudden crowding and long wait times. Fixed time-slot reservations collapse whenever unpredictable traffic delays cause motorists to miss their turn. This leaves following drivers waiting unnecessarily while station capacity goes unused.",
    problemScope: "Participants should build an intelligent dispatching and queue-reallocation system that continuously tracks EV battery state, real-time arterial traffic congestion, and station throughput to dynamically balance loads across charging networks.",
    aiRequirements: [
      "Dynamic reservation realignment model responding to upstream traffic velocity anomalies.",
      "Predictive demand-forecasting algorithm to prevent regional charger herd behavior.",
      "Optimized route and charger reassignment engine maximizing station capacity utilization."
    ],
    deliverables: [
      "Live interactive dispatcher dashboard visualizing real-time station occupancy and queue states.",
      "Driver recommendation engine/API calculating optimal charging detours.",
      "Simulation bench showing wait-time reductions compared to static time-slot booking."
    ],
    sampleDatasets: ["Open Charge Point Network APIs", "City Traffic Velocity GeoJSON feeds", "Synthetic EV Battery Telemetry logs"]
  },
  {
    id: "TRN-02",
    theme: "transport",
    themeName: "Transport",
    themeIcon: "fa-solid fa-car",
    title: "Vehicle Operator Fatigue and Privacy",
    tagline: "Privacy-preserving edge-native computer vision for long-distance driver drowsiness detection.",
    aiCategory: "Edge AI & Computer Vision",
    tags: ["Edge AI", "Fatigue Detection", "Privacy-Preserving", "Offline Vision", "Operator Safety"],
    summary: "Drowsy driving and inattention among long-distance operators lead to dangerous roadway accidents. Existing camera setups that stream cabin footage externally raise severe privacy concerns for operators. Furthermore, systems that depend on continuous network connections completely fail in remote, zero-connectivity zones.",
    problemScope: "Design an on-device, offline-first vision AI system that computes micro-nodding, PERCLOS (percentage of eyelid closure), and yawning metrics locally without transmitting or storing raw operator video feeds.",
    aiRequirements: [
      "Lightweight face mesh / landmark model runnable on edge hardware (e.g. Raspberry Pi, ONNX, TFLite).",
      "Real-time temporal eye-aspect-ratio (EAR) and head-pose gaze vector analysis.",
      "Strict zero-cloud raw video transmission architecture with encrypted local telemetry."
    ],
    deliverables: [
      "Working edge-vision detection pipeline processing video at >= 20 FPS.",
      "Multi-stage acoustic/visual warning trigger responding to micro-sleep episodes.",
      "Privacy architecture report proving compliance with zero-external-streaming constraints."
    ],
    sampleDatasets: ["National Tsing Hua University Drowsiness Dataset (NTHU-DDD)", "RLDD Driver Drowsiness Dataset", "Synthesized Local Edge Video Streams"]
  },
  {
    id: "TRN-03",
    theme: "transport",
    themeName: "Transport",
    themeIcon: "fa-solid fa-traffic-light",
    title: "Smart Traffic Signal Time Management",
    tagline: "Adaptive vision-based traffic light timing optimization to eliminate phantom red signal delays.",
    aiCategory: "Reinforcement Learning & Vision",
    tags: ["Adaptive Signals", "Computer Vision", "Traffic Flow", "Fuel Conservation", "Smart Cities"],
    summary: "At many traffic signals, the red signal remains active even when there are very few or no vehicles waiting. This causes unnecessary waiting time, fuel consumption, and traffic delays. An intelligent way of managing signal timing is needed to reduce unnecessary waiting and improve traffic flow.",
    problemScope: "Develop an adaptive signal controller that leverages intersection cameras or density sensors to dynamically alter green light intervals based on actual queue depths and approaching vehicle momentum.",
    aiRequirements: [
      "Vehicle detection and queue-depth estimation model (YOLOv8-nano / MobileNet).",
      "Dynamic cycle calculation or Reinforcement Learning agent (e.g., Deep Q-Network) optimizing green phases.",
      "Failsafe logic ensuring pedestrian crossing safety and emergency vehicle priority override."
    ],
    deliverables: [
      "Simulated multi-intersection environment (e.g., SUMO or interactive HTML5 Canvas simulation).",
      "Real-time signal switching controller demonstrating fuel savings and reduced idle times.",
      "Benchmarked performance comparison against fixed-timer control schedules."
    ],
    sampleDatasets: ["Urban Intersection Video Feeds", "SUMO Simulation Scenarios", "Open Traffic Density & Flow Datasets"]
  },
  {
    id: "TRN-04",
    theme: "transport",
    themeName: "Transport",
    themeIcon: "fa-solid fa-bus",
    title: "Public Transport Arrival & Location Awareness",
    tagline: "Zero-hardware crowdsourced and telemetry-driven transit ETA prediction for commuters.",
    aiCategory: "Geospatial AI & Time-Series",
    tags: ["Transit ETA", "Zero Hardware", "Crowdsourced Telemetry", "Route Planning", "Commuter UX"],
    summary: "Passengers often do not know where their bus or train is currently located or when it is expected to arrive. This can lead to unnecessary waiting and difficulty in planning their journey. The solution should consider the resources and technology that are already available as part of the public transport system, without requiring additional external hardware to be installed.",
    problemScope: "Engineer a high-precision transit ETA and location awareness engine using preexisting signals (such as passenger smartphone pings, conductor ticketing devices, public GTFS-RT feeds, or cellular tower handoffs) without requiring expensive new onboard sensors.",
    aiRequirements: [
      "Kalman filter or LSTM-based transit velocity estimator filtering erratic crowd GPS traces.",
      "Historical headway and bottleneck-aware arrival ETA regression model.",
      "Anonymized passenger aggregation algorithm ensuring commuter location privacy."
    ],
    deliverables: [
      "Passenger web application showing live approaching bus/train telemetry and arrival countdowns.",
      "Conductor / driver lightweight mobile web telemetry broadcaster.",
      "Low-bandwidth data synchronization protocol suitable for 2G/3G connectivity conditions."
    ],
    sampleDatasets: ["Open GTFS & GTFS-Realtime Datasets", "Synthetic Transit Route Breadcrumbs", "Municipal Bus Timetables"]
  },
  {
    id: "TRN-05",
    theme: "transport",
    themeName: "Transport",
    themeIcon: "fa-solid fa-lightbulb",
    title: "Student Innovation — Open Mobility & Transport",
    tagline: "Open problem track for groundbreaking student-driven AI solutions in urban mobility, logistics, or safety.",
    aiCategory: "Open AI Innovation",
    tags: ["Student Innovation", "Open Mobility", "Fleet Optimization", "Green Transit", "Autonomous AI"],
    summary: "Propose an original, student-driven AI innovation addressing a critical, high-impact bottleneck in transportation, urban transit, micro-mobility, safety, or logistics using modern AI/ML frameworks.",
    problemScope: "Teams are invited to present an end-to-end prototype tackling any transport problem not covered by the predefined statements, demonstrating algorithmic ingenuity, feasibility, and measurable community or environmental impact.",
    aiRequirements: [
      "Clear AI/ML component (deep learning, reinforcement learning, computer vision, or predictive analytics).",
      "Demonstrable real-world dataset and validation methodology.",
      "Scalable system architecture with working proof of concept."
    ],
    deliverables: [
      "Functional working prototype or interactive application demonstrating the innovation.",
      "Technical architecture documentation detailing model pipeline and data flow.",
      "Impact assessment quantifying speed, safety, cost, or carbon footprint benefits."
    ],
    sampleDatasets: ["Self-Curated or Public Transport / Geospatial Benchmarks"]
  },

  // =========================================================================
  // 2. TRACK: HEALTHCARE
  // =========================================================================
  {
    id: "HLT-01",
    theme: "healthcare",
    themeName: "Healthcare",
    themeIcon: "fa-solid fa-heart-pulse",
    title: "Elderly Patient Safety & Assistance",
    tagline: "Ambient multi-modal sensing and computer vision for fall detection and rapid emergency dispatch.",
    aiCategory: "Ambient AI & Pose Estimation",
    tags: ["Elderly Care", "Fall Detection", "Pose Estimation", "Ambient AI", "Emergency Alerts"],
    summary: "Elderly people living alone may face difficulties when they fall, become unwell, or need immediate assistance. In some situations, they may not be able to contact someone quickly. A better way of identifying situations where an elderly person may need assistance is needed.",
    problemScope: "Create a compassionate, non-intrusive monitoring assistant that accurately differentiates harmless everyday actions (lying on a couch, bending down to pick up items) from critical falls or sudden collapses, and immediately alerts caregivers.",
    aiRequirements: [
      "Human skeleton pose estimation (MediaPipe / MoveNet / YOLO-Pose) tracking key joints.",
      "Temporal fall verification model (analyzing velocity vectors and post-fall immobility).",
      "Automated SOS dispatch webhook with location, timestamp, and severity indicator."
    ],
    deliverables: [
      "Real-time webcam or video stream monitoring interface with skeleton overlays.",
      "Emergency alert notification dispatch (SMS, Webhook, Telegram/WhatsApp alert).",
      "False-positive rejection test suite distinguishing sitting/lying from accidental falls."
    ],
    sampleDatasets: ["UR Fall Detection Dataset (URFD)", "Multiple Cameras Fall Dataset", "Thermal / RGB Fall Action Sequences"]
  },
  {
    id: "HLT-02",
    theme: "healthcare",
    themeName: "Healthcare",
    themeIcon: "fa-solid fa-wave-square",
    title: "Heartbeat Changes During Stress",
    tagline: "Correlating physiological cardiovascular response fluctuations with everyday stress triggers.",
    aiCategory: "Biosignal Processing & Time-Series ML",
    tags: ["Heart Rate Variability", "Stress Tracking", "Time-Series ML", "Wearable Biosignals", "Digital Health"],
    summary: "Stress, anxiety, and strong emotions can affect heart rate and other body responses. People may experience noticeable changes without understanding when or why they occur. A better way of observing the relationship between daily situations and changes in heart activity is needed.",
    problemScope: "Develop an intelligent biosignal analytics system that processes photoplethysmography (PPG) or ECG time-series data to detect stress spikes, calculate Heart Rate Variability (HRV) metrics, and correlate physiological shifts with daily context.",
    aiRequirements: [
      "Signal preprocessing module for noise filtering, peak detection (R-peaks), and artifact removal.",
      "Feature extractor computing SDNN, RMSSD, LF/HF frequency domain balance.",
      "Stress classification model predicting acute cognitive stress episodes."
    ],
    deliverables: [
      "Interactive health dashboard visualizing real-time heart rate trends and stress severity bands.",
      "Context correlation log linking calendar events or user inputs to cardiovascular spikes.",
      "Personalized biofeedback and guided relaxation pacing interface."
    ],
    sampleDatasets: ["WESAD (Wearable Stress and Affect Detection)", "SWELL-KW Dataset", "PhysioNet PPG & ECG databases"]
  },
  {
    id: "HLT-03",
    theme: "healthcare",
    themeName: "Healthcare",
    themeIcon: "fa-solid fa-file-medical",
    title: "Medical Report Management",
    tagline: "Intelligent multimodal OCR and clinical entity extraction for unified patient health histories.",
    aiCategory: "Document AI & Clinical NLP",
    tags: ["Medical OCR", "Document AI", "Clinical NLP", "EHR Standards", "Patient Records"],
    summary: "Patients may have medical reports from different hospitals, laboratories, and doctors stored in different places. Finding an older report when it is needed can be difficult and time-consuming. A better way of organizing and accessing a patient's medical reports is needed.",
    problemScope: "Engineer a secure personal health record companion that digests messy photos/scans of blood tests, prescriptions, and radiology summaries, extracts clinical entities into structured timelines, and allows semantic search.",
    aiRequirements: [
      "High-accuracy document OCR engine optimized for noisy medical print and handwriting.",
      "Named Entity Recognition (NER) pipeline identifying medications, dosages, lab biomarkers, and diagnoses.",
      "Structured health timeline builder normalizing lab values into standard reference ranges."
    ],
    deliverables: [
      "Mobile-friendly report scanner and uploader with automatic document classification.",
      "Interactive longitudinal health charts (e.g. cholesterol, blood glucose trends over years).",
      "Semantic search bar answering questions like 'Show all prescriptions from last December'."
    ],
    sampleDatasets: ["MIMIC-IV Clinical Document Extracts", "Synthea Synthetic EHR Records", "Open Medical Lab Report Samples"]
  },
  {
    id: "HLT-04",
    theme: "healthcare",
    themeName: "Healthcare",
    themeIcon: "fa-solid fa-hospital-user",
    title: "Rural Healthcare Access",
    tagline: "Offline-first intelligent triage and vernacular symptom checker for remote clinical deserts.",
    aiCategory: "Diagnostic AI & Vernacular NLP",
    tags: ["Rural Health", "Telemedicine", "Offline AI", "Vernacular Chatbot", "Clinical Triage"],
    summary: "People living in rural and remote areas may have difficulty accessing specialized healthcare services. Long travel distances can delay medical consultation and treatment. A better way of improving access to healthcare in remote areas is needed.",
    problemScope: "Construct an offline-capable, vernacular-friendly clinical triage system that assists community health workers (e.g., ASHA workers) in screening symptoms, prioritizing urgent emergencies, and preparing concise referral summaries for distant specialists.",
    aiRequirements: [
      "Lightweight clinical decision support model running locally on budget smartphone devices.",
      "Multilingual speech and text interface supporting regional Indian dialects.",
      "Asynchronous telemedicine store-and-forward synchronizer operating over spotty connectivity."
    ],
    deliverables: [
      "Progressive Web App (PWA) with full offline triage checklists and voice queries.",
      "Automated clinical risk stratification indicator (Green: Home Care, Amber: PHC Visit, Red: Immediate Referral).",
      "Compact summarized patient digital token sent to regional hospital specialists via SMS/low-data packet."
    ],
    sampleDatasets: ["WHO Integrated Management of Childhood/Adult Illness Guidelines", "Synthea Multilingual Symptom Corpus", "Public Triage Clinical Protocols"]
  },
  {
    id: "HLT-05",
    theme: "healthcare",
    themeName: "Healthcare",
    themeIcon: "fa-solid fa-dna",
    title: "Student Innovation — Open Healthcare & Wellbeing",
    tagline: "Pioneer a student-led medical or wellbeing AI breakthrough with high societal impact.",
    aiCategory: "Open Health Innovation",
    tags: ["Student Innovation", "MedTech", "Preventive Health", "Biomedical AI", "Mental Wellness"],
    summary: "Propose a novel AI-powered breakthrough in healthcare diagnostics, preventive medicine, clinical workflows, patient accessibility, medical imaging, or community wellbeing.",
    problemScope: "Student innovators are encouraged to submit end-to-end working prototypes tackling critical unmet clinical needs, mental wellness challenges, surgical planning aids, or accessible assistive devices for people with disabilities.",
    aiRequirements: [
      "Rigorous AI/ML algorithm addressing an authentic clinical or health-access need.",
      "Clear clinical safety guardrails, disclaimer design, and bias mitigation awareness.",
      "Functional interactive demonstration showcasing patient/practitioner workflow."
    ],
    deliverables: [
      "Working web or mobile application with live clinical/health inference demo.",
      "Architecture diagram outlining data privacy, patient security, and model inference.",
      "Validation study comparing model predictions with standard baseline metrics."
    ],
    sampleDatasets: ["Open-Source Biomedical, Clinical, or Physiological Repositories"]
  },

  // =========================================================================
  // 3. TRACK: EDUCATION
  // =========================================================================
  {
    id: "EDU-01",
    theme: "education",
    themeName: "Education",
    themeIcon: "fa-solid fa-graduation-cap",
    title: "Uniform Pacing and Unidentified Knowledge Gaps",
    tagline: "Adaptive knowledge tracing and granular prerequisite mastery diagnostics for individual students.",
    aiCategory: "Adaptive Learning & Knowledge Tracing",
    tags: ["Knowledge Tracing", "Adaptive Learning", "Concept Mastery", "Diagnostic Testing", "EdTech AI"],
    summary: "Every student understands topics at a different pace, yet standard instruction treats the entire class as a single unit. Learners frequently struggle with specific foundational concepts without realizing where their confusion began. Without individual tracking, struggling students fall further behind as tests fail to adapt to their exact weak points.",
    problemScope: "Build an adaptive learning engine that tracks concept-level mastery networks (knowledge graphs), pinpointing precisely which prerequisite foundational misconception is tripping up a student and generating customized micro-practice paths.",
    aiRequirements: [
      "Bayesian Knowledge Tracing (BKT) or Deep Knowledge Tracing (DKT) recurrent model.",
      "Prerequisite knowledge graph mapping relationships between syllabus concepts.",
      "Dynamic question difficulty selector adapting in real-time to student response patterns."
    ],
    deliverables: [
      "Student interactive dashboard showing visual concept mastery trees and identified gaps.",
      "Personalized remedial quiz generator targeting exact weak points.",
      "Teacher analytics panel identifying classroom-wide conceptual bottlenecks."
    ],
    sampleDatasets: ["Assistments Open Educational Benchmark", "EdNet Student Interaction Dataset", "Curated STEM Subject Knowledge Graphs"]
  },
  {
    id: "EDU-02",
    theme: "education",
    themeName: "Education",
    themeIcon: "fa-solid fa-language",
    title: "Classroom Language Barriers and Note Retention",
    tagline: "Real-time vernacular speech translation, concept extraction, and structured study note synthesizer.",
    aiCategory: "Speech AI & Multilingual NLP",
    tags: ["Speech-to-Text", "Vernacular Translation", "Lecture Summarization", "Smart Notes", "EdTech AI"],
    summary: "Spoken lectures move too quickly for many students to capture key ideas while simultaneously trying to understand the material. Language differences and varied listening comprehension make it difficult for everyone to follow along equally. As a result, students miss critical explanations and lack structured revision materials when studying on their own.",
    problemScope: "Design a real-time lecture companion that captures teacher speech, translates technical explanations into the student's chosen vernacular tongue, and synthesizes structured revision cheat sheets with key definitions and diagrams.",
    aiRequirements: [
      "Low-latency Automatic Speech Recognition (ASR) capable of parsing classroom acoustic conditions.",
      "Domain-adapted machine translation preserving technical STEM terminology.",
      "Hierarchical text summarizer extracting bulleted key takeaways, formulas, and flashcards."
    ],
    deliverables: [
      "Real-time dual-language lecture captions web viewer.",
      "One-click auto-generated study guide with downloadable PDF summary.",
      "Interactive Q&A bot grounded specifically in that day's lecture transcript."
    ],
    sampleDatasets: ["AI4Bharat IndicSpeech & IndicTrans Corpora", "Open NPTEL / MIT OCW Lecture Transcripts", "Common Voice Multi-Lingual Speech"]
  },
  {
    id: "EDU-03",
    theme: "education",
    themeName: "Education",
    themeIcon: "fa-solid fa-chart-line",
    title: "Delayed Detection of Academic Dropouts",
    tagline: "Multi-dimensional early warning system identifying silent disengagement before grades crash.",
    aiCategory: "Predictive Modeling & Behavioral Analytics",
    tags: ["Dropout Prevention", "Early Warning", "Student Retention", "Behavioral ML", "Academic Analytics"],
    summary: "Institutions often realize a student is struggling only after they fail an examination or stop attending classes entirely. Subtle warning signs, such as slipping participation and slow assignment turn-ins, go unnoticed in large classrooms. By the time educators identify the problem, it is often too late to prevent the student from falling behind or dropping out.",
    problemScope: "Create an ethical, privacy-first early-warning predictive system that analyzes multidimensional student engagement signals (LMS activity, submission timing shifts, library usage, assignment lags) to flag students needing empathetic human counselor intervention.",
    aiRequirements: [
      "Time-series anomaly detection or survival analysis model predicting disengagement trajectories.",
      "SHAP / LIME explainability module explaining to mentors why a student was flagged.",
      "Strict ethical privacy controls preventing punitive automated actions."
    ],
    deliverables: [
      "Faculty/Mentor early-warning dashboard with actionable student intervention alerts.",
      "Automated empathetic student check-in survey mechanism with resource recommendations.",
      "Historical retention simulation showing early intervention success rates."
    ],
    sampleDatasets: ["Open University Learning Analytics Dataset (OULAD)", "Higher Education Student Performance Data", "Synthetic LMS Interaction Logs"]
  },
  {
    id: "EDU-04",
    theme: "education",
    themeName: "Education",
    themeIcon: "fa-solid fa-users-viewfinder",
    title: "Superficial Attendance and Passive Classroom Presence",
    tagline: "Interactive cognitive pulse check and micro-engagement loops to measure true classroom resonance.",
    aiCategory: "Interaction AI & Engagement Analytics",
    tags: ["Cognitive Engagement", "Active Learning", "Classroom Pulse", "Interactive Polling", "EdTech"],
    summary: "Marking physical presence does not reflect whether a student is actually paying attention or absorbing the material. Quiet disengagement, passive sitting, and lack of interaction often go unnoticed until coursework grades drop. Relying only on roll calls obscures whether the classroom environment is genuinely holding student interest.",
    problemScope: "Develop an interactive, non-surveillance classroom engagement platform that measures real comprehension through frictionless 30-second cognitive pulse checks, anonymous peer confidence meters, and micro-challenges.",
    aiRequirements: [
      "Real-time comprehension clustering algorithm aggregating anonymous classroom feedback.",
      "Adaptive micro-quiz generator synthesizing questions based on what the instructor just explained.",
      "Classroom Resonance Index (CRI) calculation quantifying lecture clarity and pacing."
    ],
    deliverables: [
      "Student zero-install smartphone interface for real-time anonymous pulse voting.",
      "Teacher live HUD displaying classroom comprehension thermometer and pace recommendations.",
      "Lecture heat-map showing which topics caused the most confusion."
    ],
    sampleDatasets: ["Active Learning Classroom Interaction Benchmarks", "Peer Instruction Question Repositories"]
  },
  {
    id: "EDU-05",
    theme: "education",
    themeName: "Education",
    themeIcon: "fa-solid fa-lightbulb",
    title: "Student Innovation — Open Education & Adaptive Learning",
    tagline: "Propose an original educational technology breakthrough to democratize high-impact learning.",
    aiCategory: "Open Educational Innovation",
    tags: ["Student Innovation", "EdTech", "Gamified Learning", "Accessible Education", "Generative AI"],
    summary: "Develop a ground-breaking student-created AI solution that transforms pedagogical methods, accessibility, assessment, or educational empowerment.",
    problemScope: "Teams may showcase novel AI tutors, multimodal accessibility tools for neurodivergent or visually-impaired students, automated peer code reviewers, or gamified skill mastery platforms.",
    aiRequirements: [
      "Demonstrated AI/ML model integration (LLMs, Computer Vision, Speech, or Recommendation).",
      "Student-centric usability design validated through practical trial workflows.",
      "Clear metrics proving enhanced learning efficiency or accessibility."
    ],
    deliverables: [
      "Interactive working software prototype accessible via web/mobile.",
      "Comprehensive walkthrough showcasing learner interaction and feedback loops.",
      "Source repository with reproducible setup and test documentation."
    ],
    sampleDatasets: ["Public Educational Data Repositories or Self-Collected Learning Traces"]
  },

  // =========================================================================
  // 4. TRACK: AGRICULTURE
  // =========================================================================
  {
    id: "AGR-01",
    theme: "agriculture",
    themeName: "Agriculture",
    themeIcon: "fa-solid fa-seedling",
    title: "Soil Nutrient Degradation and Over-Fertilization",
    tagline: "Hyper-local precision nutrient mapping and variable-rate NPK fertilizer optimization.",
    aiCategory: "Soil Chemistry AI & Precision Ag",
    tags: ["Soil Health", "NPK Optimization", "Precision Agriculture", "Runoff Prevention", "Fertilizer AI"],
    summary: "Agricultural runoff pollutes local water systems and degrades soil health because farmers apply chemical fertilizers uniformly across fields rather than adjusting for localized soil needs.",
    problemScope: "Engineer a localized soil nutrient recommendation platform that processes soil test data, crop variety requirements, and satellite imagery to calculate custom variable-rate nitrogen, phosphorus, and potassium (NPK) application zones.",
    aiRequirements: [
      "Multi-variable soil chemistry model predicting optimal NPK dosage based on crop life-cycle stage.",
      "Satellite NDVI / soil moisture integration to map intra-field nutrient deficiency hotspots.",
      "Cost-benefit calculator comparing uniform vs. variable-rate application savings."
    ],
    deliverables: [
      "Farmer-friendly prescription map highlighting distinct field zones with specific kg/acre advice.",
      "Fertilizer cost reduction and runoff risk estimator.",
      "Mobile vernacular advisory generator delivering plain-language recommendations via audio/SMS."
    ],
    sampleDatasets: ["ICAR Soil Health Card Datasets", "Sentinel-2 Multi-Spectral Agricultural Imagery", "Crop Nutrient Requirement Tables"]
  },
  {
    id: "AGR-02",
    theme: "agriculture",
    themeName: "Agriculture",
    themeIcon: "fa-solid fa-droplet",
    title: "Agricultural Water Waste in Irrigated Farming",
    tagline: "Evapotranspiration-aware dynamic irrigation scheduling using localized sensor and weather forecasts.",
    aiCategory: "Hydrological ML & IoT Systems",
    tags: ["Smart Irrigation", "Water Conservation", "Evapotranspiration", "Soil Moisture IoT", "Weather AI"],
    summary: "Billions of liters of fresh water are wasted annually due to rigid, time-based irrigation schedules that do not adjust for shifting weather forecasts or actual crop evapotranspiration rates.",
    problemScope: "Build an automated, intelligent irrigation advisory engine that calculates actual daily crop evapotranspiration (ET0) using weather predictions and soil moisture status to deliver precise water volume requirements.",
    aiRequirements: [
      "FAO-56 Penman-Monteith equation / ML proxy estimating real-time crop evapotranspiration.",
      "Predictive rainfall integration preventing irrigation right before major rain showers.",
      "Soil moisture depletion forecasting model."
    ],
    deliverables: [
      "Smart irrigation controller dashboard showing soil hydration zones and valve timings.",
      "Daily water requirement alert system sent to farmers' feature phones/smartphones.",
      "Simulated water-savings benchmark comparing scheduled timer vs. AI-driven watering."
    ],
    sampleDatasets: ["NASA POWER Agroclimatology Data", "OpenWeatherMap Ag APIs", "Soil Moisture Active Passive (SMAP) Data"]
  },
  {
    id: "AGR-03",
    theme: "agriculture",
    themeName: "Agriculture",
    themeIcon: "fa-solid fa-warehouse",
    title: "Post-Harvest Grain and Produce Spoilage in Storage",
    tagline: "Predictive microclimate monitoring and early spoilage detection in grain silos and farm warehouses.",
    aiCategory: "IoT Telemetry & Predictive Spoilage ML",
    tags: ["Grain Storage", "Post-Harvest Spoilage", "Silo Monitoring", "IoT Telemetry", "Food Security"],
    summary: "Freshly harvested crops spoil in farm storage units before reaching markets because subtle environmental shifts in humidity, ventilation, and temperature go unmonitored.",
    problemScope: "Develop an affordable multi-sensor telemetry and predictive AI sentry that monitors temperature gradients, CO2 spikes, and humidity anomalies inside grain storage silos to detect fungal growth and hot-spots days before physical rot appears.",
    aiRequirements: [
      "Time-series anomaly detection model identifying early fermentation and pest respiration patterns.",
      "Equilibrium Moisture Content (EMC) calculator assessing grain mycotoxin risk.",
      "Predictive ventilation controller advising optimal aeration fan run-times."
    ],
    deliverables: [
      "Warehouse silo monitoring dashboard with color-coded shelf-life degradation countdown.",
      "Automated aeration fan trigger or ventilation alert notification.",
      "Spoilage loss risk analysis report detailing financial value at risk."
    ],
    sampleDatasets: ["Post-Harvest Grain Silo Sensor Logs", "USDA Agricultural Spoilage Parameters", "Synthesized Temperature/Humidity/CO2 Records"]
  },
  {
    id: "AGR-04",
    theme: "agriculture",
    themeName: "Agriculture",
    themeIcon: "fa-solid fa-cloud-bolt",
    title: "Unpredictable Frost and Extreme Weather Damage",
    tagline: "Hyper-local field-level microclimate forecasting and early frost/heatwave alert system for high-value crops.",
    aiCategory: "Microclimate Modeling & Extreme Weather AI",
    tags: ["Frost Prediction", "Extreme Weather", "Microclimate AI", "Crop Protection", "Actionable Alerts"],
    summary: "Sudden localized microclimate changes, such as localized frosts or heatwaves, destroy high-value crops because general weather apps fail to provide hyper-local, actionable warnings at the field level.",
    problemScope: "Create a localized microclimate forecasting model that factors in elevation, canopy density, valley cold-air pooling, and nearby water bodies to issue actionable 6-to-24 hour frost and thermal shock warnings with specific mitigation protocols (e.g. smudge pots, sprinkler icing, shade nets).",
    aiRequirements: [
      "Downscaling weather model refining coarse regional forecasts to 100m² field grids.",
      "Surface temperature inversion and dew-point depression calculation model.",
      "Actionable advisory rules engine pairing frost hazard with practical immediate field remedies."
    ],
    deliverables: [
      "Interactive field hazard map displaying frost and heat stress danger zones.",
      "Automated SMS/Voice broadcast dispatching urgent mitigation steps in regional languages.",
      "Historical back-testing tool demonstrating prediction accuracy on past frost events."
    ],
    sampleDatasets: ["ERA5-Land Reanalysis Data", "IMD Gridded Weather Datasets", "Localized Micro-Weather Station Telemetry"]
  },
  {
    id: "AGR-05",
    theme: "agriculture",
    themeName: "Agriculture",
    themeIcon: "fa-solid fa-wheat-awn",
    title: "Student Innovation — Open AgriTech & Rural Solutions",
    tagline: "Pioneer a student-led agricultural technology invention to empower farming communities.",
    aiCategory: "Open AgriTech Innovation",
    tags: ["Student Innovation", "AgriTech", "Pest Management", "Rural Economy", "Autonomous Farming"],
    summary: "Propose an innovative AI/IoT solution tackling critical farming challenges, yield optimization, pest management, or sustainable agro-ecosystems.",
    problemScope: "Participants may invent novel drone-based weed sprayers, smartphone leaf pathogen diagnostic scanners, livestock biometric identifiers, fair-market price recommendation systems, or agricultural supply chain traceability tools.",
    aiRequirements: [
      "Rigorous AI/ML implementation tailored for practical agricultural realities.",
      "Robustness against outdoor environmental noise (varying lighting, muddy backgrounds, spotty internet).",
      "Clear economic and yield uplift rationale for smallholder farming families."
    ],
    deliverables: [
      "Working prototype application or hardware-software integration demo.",
      "Field validation test results and system architecture breakdown.",
      "Scalability roadmap detailing deployment feasibility across rural India."
    ],
    sampleDatasets: ["Public Agricultural Imagery, Crop Yield, or Market Mandi Price Datasets"]
  },

  // =========================================================================
  // 5. TRACK: SUSTAINABLE
  // =========================================================================
  {
    id: "SUS-01",
    theme: "sustainable",
    themeName: "Sustainable",
    themeIcon: "fa-solid fa-smog",
    title: "Fugitive Industrial Methane Leaks",
    tagline: "Automated detection and localization of invisible industrial greenhouse gas leaks using multispectral imagery.",
    aiCategory: "Hyperspectral Vision & Environmental Remote Sensing",
    tags: ["Methane Detection", "Industrial Safety", "Emissions Tracking", "Satellite Imagery", "Climate Action"],
    summary: "Invisible methane leaks from pipelines, oil fields, and industrial facilities frequently go unnoticed for months, severely accelerating short-term global warming without being detected by facility managers.",
    problemScope: "Build an automated detection pipeline that processes multispectral satellite passes (Sentinel-5P, Landsat 8/9, PRISMA) or thermal FLIR drone camera feeds to pinpoint anomalous methane absorption plumes and estimate emission flux rates.",
    aiRequirements: [
      "Short-Wave Infrared (SWIR) absorption band ratio and plume segmentation neural network.",
      "Atmospheric dispersion modeling estimating metric tons of CH4 emitted per hour.",
      "Automated facility alert and priority ranking based on plume volume and persistence."
    ],
    deliverables: [
      "Interactive industrial emissions map highlighting verified methane plume hotspots.",
      "Automated inspection report generator with GPS coordinates, estimated leak rate, and imagery.",
      "Time-series tracker monitoring whether detected leaks have been remediated."
    ],
    sampleDatasets: ["Sentinel-5P TROPOMI Methane Products", "Carbon Mapper Open Data Portal", "NASA EMIT Imaging Spectrometer Data"]
  },
  {
    id: "SUS-02",
    theme: "sustainable",
    themeName: "Sustainable",
    themeIcon: "fa-solid fa-recycle",
    title: "Premature E-Waste Discard and Unverified Device Resale",
    tagline: "AI diagnostic grading, remaining battery health estimation, and circular electronics refurbishment verifier.",
    aiCategory: "Diagnostics AI & Circular Economy",
    tags: ["E-Waste Reduction", "Battery Health", "Circular Economy", "Device Refurbishment", "Hardware Diagnostics"],
    summary: "Consumers and secondary markets discard functioning consumer electronics prematurely because assessing remaining battery health, component authenticities, and device values is difficult without specialized technical testing.",
    problemScope: "Engineer a standardized, software-driven diagnostic grading suite that tests hardware integrity, estimates remaining battery cycle degradation, verifies genuine parts, and outputs a trusted digital refurbishment passport.",
    aiRequirements: [
      "Electrochemical state-of-health (SoH) regression model predicting remaining useful battery cycles.",
      "Automated hardware stress-test suite checking display pixels, sensor calibration, and thermal throttling.",
      "Fair-market algorithmic valuation model encouraging secondary resale over landfill disposal."
    ],
    deliverables: [
      "Cross-platform device diagnostic web/native testing agent runnable on used laptops/smartphones.",
      "Verifiable Digital Device Passport certificate detailing hardware health scores.",
      "Refurbishment vs. recycle decision matrix recommending optimal component salvage."
    ],
    sampleDatasets: ["NASA Battery Aging Datasets", "Synthetic Hardware Benchmark Traces", "Open E-Waste Market Valuation Indices"]
  },
  {
    id: "SUS-03",
    theme: "sustainable",
    themeName: "Sustainable",
    themeIcon: "fa-solid fa-solar-panel",
    title: "Extreme Weather & Microclimate Resilience in Clean Energy Assets",
    tagline: "Protecting solar arrays, wind installations, and microgrids from localized storms and extreme thermal swings.",
    aiCategory: "Microclimate Modeling & Renewable Grid AI",
    tags: ["Renewable Energy", "Microclimate AI", "Asset Protection", "Solar Wind Resilience", "Extreme Weather"],
    summary: "Sudden localized microclimate changes, such as localized frosts, hail storms, or heatwaves, destroy high-value green energy installations and agricultural buffer zones because general weather apps fail to provide hyper-local, actionable warnings at the facility level.",
    problemScope: "Construct a predictive microclimate resilience system for decentralized clean energy installations (solar farms, wind turbines, battery storage containers) that anticipates severe local storms, hail, or heatwaves and executes automated defensive asset positioning (e.g. solar panel stow angle, wind turbine feathering).",
    aiRequirements: [
      "High-resolution weather radar & satellite nowcasting model predicting localized severe storm cells.",
      "Thermal stress and generation derating prediction model for solar PV arrays and grid inverters.",
      "Automated protective actuator control advisory (stowing angles, cooling activation)."
    ],
    deliverables: [
      "Renewable plant command center showing real-time atmospheric threat vectors and alert tiers.",
      "Defensive positioning actuator simulator demonstrating asset damage prevention.",
      "Economic loss prevention dashboard calculating saved hardware replacement costs."
    ],
    sampleDatasets: ["NREL National Solar Radiation Database (NSRDB)", "NOAA HRRR High-Resolution Weather Model", "Solar Plant SCADA Incident Logs"]
  },
  {
    id: "SUS-04",
    theme: "sustainable",
    themeName: "Sustainable",
    themeIcon: "fa-solid fa-tree",
    title: "Deforestation and Land Encroachment from Unmonitored Farming",
    tagline: "Satellite Earth Observation and canopy change segmentation for autonomous forest boundary protection.",
    aiCategory: "Geospatial AI & Satellite Earth Observation",
    tags: ["Deforestation", "Satellite Earth Observation", "Canopy Tracking", "Forest Conservation", "Geospatial AI"],
    summary: "Agricultural expansion illegally encroaches onto protected forest reserves and buffer zones because monitoring vast rural boundaries manually is impractical for local authorities.",
    problemScope: "Build an automated Earth Observation pipeline that ingests bi-weekly satellite passes (Sentinel-2, Planet NICFI) to detect illegal canopy clearing, slash-and-burn smoke signatures, and boundary trespassing in protected ecological zones.",
    aiRequirements: [
      "Siamese / U-Net convolutional change detection model identifying forest loss with pixel-level precision.",
      "Cloud and shadow filtering algorithm ensuring low false-alarm rates during monsoon seasons.",
      "Geofenced boundary breach classifier notifying forest rangers with precise GPS polygons."
    ],
    deliverables: [
      "Interactive satellite map with dynamic before-and-after deforestation change overlays.",
      "Automated ranger dispatch alert containing deforestation hectare metrics and satellite evidence.",
      "Historical trend visualizer showing encroachment rates along forest buffer perimeters."
    ],
    sampleDatasets: ["Global Forest Watch Deforestation Alerts", "Sentinel-2 Multi-Temporal Forest Imagery", "Open Protected Planet Conservation Boundaries"]
  },
  {
    id: "SUS-05",
    theme: "sustainable",
    themeName: "Sustainable",
    themeIcon: "fa-solid fa-leaf",
    title: "Student Innovation — Open Clean Tech & Sustainable Development",
    tagline: "Pioneer a student-led green technology or circular economy AI breakthrough for a sustainable planet.",
    aiCategory: "Open Clean Tech Innovation",
    tags: ["Student Innovation", "CleanTech", "Carbon Accounting", "Circular Economy", "Green AI"],
    summary: "Propose an innovative AI concept accelerating renewable energy adoption, carbon accounting, biodiversity preservation, plastic waste recycling, or zero-waste circular systems.",
    problemScope: "Student teams are challenged to design and build original AI algorithms tackling climate change, environmental sustainability, waste management, green building optimization, or ecological restoration.",
    aiRequirements: [
      "Direct relevance to environmental sustainability or climate resilience.",
      "Demonstrated AI/ML integration solving a measurable ecological or efficiency challenge.",
      "Practical deployment feasibility and environmental impact quantification."
    ],
    deliverables: [
      "Functional interactive software or hardware prototype showcasing the solution.",
      "System design blueprint explaining algorithmic workflow and sustainable architecture.",
      "Carbon / resource savings estimation framework."
    ],
    sampleDatasets: ["Open Climate, Energy, Ecological, or Carbon Footprint Data Repositories"]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CHALLENGES_DATA };
}
