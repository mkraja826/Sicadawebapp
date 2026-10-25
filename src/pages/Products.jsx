import { useState } from "react";
import {
  ArrowRight,
  ShieldCheck,
  Activity,
  FileText,
  BrainCircuit,
  QrCode,
  Stethoscope,
  Search,
  Lock,
  CheckCircle2,
  Layers,
  Sparkles,
  Database,
  Mic,
  Clock,
  Share2,
  FileCheck,
  Bot,
  Zap,
  Cpu,
  Sliders,
  BarChart3,
  PlayCircle,
  HardDrive,
  FileCode2,
  Smartphone,
  Workflow,
  ShoppingBag,
  Cloud,
  DownloadCloud,
  Gauge,
  Trash2,
  Radio,
} from "lucide-react";

export default function Products() {
  const [activeTab, setActiveTab] = useState("overview");
  const [byoiSubTab, setByoiSubTab] = useState("pipeline");

  // Detailed MLOP Project Capabilities (Web + Mobile Hub)
  const byoiCoreFeatures = [
    {
      title: "Visual AI Pipeline Canvas",
      subtitle: "Node-Based End-to-End Orchestration",
      desc: "Drag-and-drop workflow canvas (AIPipelineCanvas) to design data ingestion, tokenization, training, evaluation, and export pipelines visually.",
      icon: Workflow,
    },
    {
      title: "Dataset Studio & Column Mapper",
      subtitle: "Multi-Format Curation & Presets",
      desc: "Upload CSV, JSON, and JSONL instruction datasets with an interactive visual column mapper for Instruction, Input, and Output fields. Includes 1-click presets for Medical Q&A, Python Coder, and Enterprise FAQ.",
      icon: Sliders,
    },
    {
      title: "Unsloth 4-Bit QLoRA Engine",
      subtitle: "Accelerated PEFT Fine-Tuning",
      desc: "Fine-tune open weights (Llama 3.2, Qwen 2.5, DeepSeek-R1, Mistral, Phi-3.5) with 80% reduced VRAM consumption using 4-bit quantization, gradient checkpointing, and dynamic LoRA ranks.",
      icon: Cpu,
    },
    {
      title: "Live SSE Training Telemetry",
      subtitle: "Real-Time Loss Curves & VRAM Tracking",
      desc: "Server-Sent Events (SSE) stream training loss reduction, step completion ETA, learning rate schedules, and GPU VRAM allocation in real-time to Recharts visual monitors.",
      icon: BarChart3,
    },
    {
      title: "BYOI Mobile On-Device Hub",
      subtitle: "Flutter Frontend + Python Gateway",
      desc: "A dedicated mobile suite allowing offline on-device inference, pre-download hardware RAM audits, chunked GGUF streaming, and 1-click phone storage reclamation.",
      icon: Smartphone,
    },
    {
      title: "Model & Dataset Marketplace",
      subtitle: "Collaborative Model Registry",
      desc: "Browse, publish, and version fine-tuned model checkpoints and curated instruction datasets across teams with integrated tags and metadata tracking.",
      icon: ShoppingBag,
    },
  ];

  // Mobile Suite specific features from /mobile/README.md
  const mobileFeatures = [
    {
      title: "Hardware Compatibility Audit",
      desc: "Scans phone Total RAM, flash storage, and ARM64 architecture before downloading. Flags models as Fully Compatible, Requires 8GB+ Flagship, or High OOM Risk.",
      icon: Gauge,
    },
    {
      title: "Chunked GGUF Downloader",
      desc: "High-speed streaming download manager with real-time MB/s metrics, progress bars, and direct sandbox storage placement.",
      icon: DownloadCloud,
    },
    {
      title: "Offline On-Device Inference",
      desc: "Runs 4-bit quantized GGUFs locally on mobile silicon with live token streaming, Time-To-First-Token (TTFT in ms), and speed meters.",
      icon: Radio,
    },
    {
      title: "1-Click Storage Reclamation",
      desc: "Inspects exact disk space consumed by on-device GGUF binaries and provides one-tap deletion to instantly free flash memory.",
      icon: Trash2,
    },
  ];

  // Clinical Documentation Platform Data
  const corePillars = [
    {
      id: "personal",
      badge: "Patient & Family Portal",
      title: "Medical Document Intelligence & Health Records",
      subtitle: "Multimodal Document Parsing, Longitudinal Vitals & Personal Health Records (PHR)",
      description:
        "Transforms fragmented physical lab reports, prescriptions, and diagnostic scans into an organized, searchable digital health profile for individuals and family dependents.",
      icon: FileText,
      highlights: [
        "Multimodal AI OCR & Structured Clinical Entity Extraction",
        "Chronological Health Timeline & Longitudinal Vitals Tracking",
        "Multi-Profile Family Records Management with Privacy Boundaries",
        "Conversational Medical RAG (Retrieval-Augmented Generation)",
        "Instant Secure QR Code Sharing for Consultations",
      ],
    },
    {
      id: "scribe",
      badge: "Physician & Clinic Suite",
      title: "Ambient Medical Documentation & Clinical Scribing",
      subtitle: "Automated Consultation Transcription & Structured SOAP Note Synthesis",
      description:
        "Empowers healthcare providers by automatically capturing doctor-patient consultations, synthesizing structured SOAP notes, and providing instant access to patient medical histories.",
      icon: Stethoscope,
      highlights: [
        "Ambient Audio Consultation Recording & Speech Processing",
        "Automated SOAP Note Generation (Subjective, Objective, Assessment, Plan)",
        "Zero-Friction QR Scan to Import Patient History & Allergies",
        "Longitudinal Vitals & Lab Trend Analytics at the Point of Care",
        "Digital Prescription Pad & Clinical Order Management",
      ],
    },
    {
      id: "bridge",
      badge: "Interoperability Infrastructure",
      title: "Clinical Data Exchange & Interoperability Gateway",
      subtitle: "Zero-Trust Patient-Authorized Health Records Bridge",
      description:
        "A decentralized data-sharing architecture that bridges patients and medical providers without complex EHR migrations, proprietary lock-in, or manual paperwork.",
      icon: Share2,
      highlights: [
        "Time-Limited Cryptographic Access Tokens",
        "Granular Patient-Controlled Consent Management",
        "End-to-End Encrypted Storage & Zero-Knowledge Architecture",
        "Seamless Bi-Directional Clinical Note Sync",
        "Audit-Trail Logging for Healthcare Compliance",
      ],
    },
  ];

  const extractionFeatures = [
    {
      title: "Vitals Extraction",
      desc: "Captures Blood Pressure, Heart Rate, SpO2, Temperature, Blood Glucose, and BMI with timestamp normalization.",
      icon: Activity,
    },
    {
      title: "Medications & Dosages",
      desc: "Identifies active medications, dosage strengths, administration frequency, durations, and potential contraindications.",
      icon: FileCheck,
    },
    {
      title: "Diagnostic Categorization",
      desc: "Automatically classifies documents into Lab Pathology, Radiology, Prescriptions, Discharge Summaries, and Insurance.",
      icon: Layers,
    },
    {
      title: "Clinical Condition Tagging",
      desc: "Detects chronic conditions, acute symptoms, surgical history, and allergies to populate a continuous patient profile.",
      icon: BrainCircuit,
    },
  ];

  const technicalArchitecture = [
    {
      step: "01",
      title: "Multi-Format Ingestion",
      desc: "Mobile camera capture, PDF documents, and image uploads processed client-side with base64 sanitization and format verification.",
      icon: FileText,
    },
    {
      step: "02",
      title: "Multimodal AI Vision & Parsing",
      desc: "Advanced multimodal LLM pipelines inspect unstructured document scans to extract structured JSON entities, summaries, and vital metrics.",
      icon: Sparkles,
    },
    {
      step: "03",
      title: "Vector Embedding & Semantic Indexing",
      desc: "Medical text and extracted findings are vectorized into high-dimensional embeddings for rapid semantic indexing in Pinecone.",
      icon: Database,
    },
    {
      step: "04",
      title: "Encrypted Cloud Storage & Firestore",
      desc: "Original records stored in AES-256 encrypted cloud buckets with metadata, timestamps, and user isolation enforced in Firestore.",
      icon: Lock,
    },
    {
      step: "05",
      title: "Natural Language RAG Engine",
      desc: "Patients ask conversational queries ('When was my last tetanus booster?', 'Show my lipid profile trend') and receive grounded answers.",
      icon: Bot,
    },
    {
      step: "06",
      title: "Ambient Scribe & Provider Bridge",
      desc: "Consultation audio streams generate real-time SOAP notes, while QR handshakes let physicians access verified medical histories in seconds.",
      icon: Mic,
    },
  ];

  const companionProducts = [
    {
      name: "Sicada Cortex CRM",
      category: "Enterprise Sales & Customer Intelligence",
      description:
        "AI-first customer relationship platform featuring conversational copilots, automated lead scoring, and contextual relationship tracking.",
      metrics: "3.4x faster lead response times",
      link: "/services#enterprise-ai",
    },
    {
      name: "Sicada Sentinel",
      category: "Cybersecurity & Threat Intelligence",
      description:
        "Autonomous security operations engine that synthesizes log data, flags behavioral anomalies, and automates incident response workflows.",
      metrics: "78% reduction in mean time to detect (MTTD)",
      link: "/services#cybersecurity",
    },
    {
      name: "Sicada Flow ERP",
      category: "Supply Chain & Operations AI",
      description:
        "Predictive operational intelligence integrating predictive procurement, real-time demand forecasting, and autonomous inventory optimization.",
      metrics: "22% reduction in operational inventory overhead",
      link: "/services#enterprise-ai",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-950">
      {/* Hero Section */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider">
              <Sparkles size={14} /> Sicada Digital Products
            </div>
            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-[4.25rem] leading-[1.05] tracking-[-0.04em] font-semibold text-slate-950">
              Production software systems built with intelligence at their core.
            </h1>
            <p className="mt-7 text-xl text-slate-600 leading-relaxed max-w-3xl">
              From full-stack MLOps fine-tuning and on-device edge execution with BYOI to autonomous clinical documentation systems, Sicada engineers platforms that give organizations complete data sovereignty and operational efficiency.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#byoi-mlops"
                className="inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 text-sm font-semibold transition-colors shadow-sm"
              >
                Explore BYOI MLOps Platform <ArrowRight size={17} />
              </a>
              <a
                href="#medical-documentation-platform"
                className="inline-flex items-center gap-2.5 border border-slate-300 hover:border-slate-400 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition-colors"
              >
                Medical Documentation System
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 border border-slate-300 hover:border-slate-400 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition-colors"
              >
                Request Architecture Demo
              </a>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-slate-200">
            <div>
              <div className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-950">4-Bit QLoRA</div>
              <div className="text-sm font-medium text-slate-500 mt-1">Unsloth Training Acceleration</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-950">Edge + Cloud</div>
              <div className="text-sm font-medium text-slate-500 mt-1">Flutter Mobile On-Device & GCP Deploy</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-950">99.2%</div>
              <div className="text-sm font-medium text-slate-500 mt-1">Medical Entity Extraction Accuracy</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-950">&lt; 1.5s</div>
              <div className="text-sm font-medium text-slate-500 mt-1">Vector Search Retrieval Latency</div>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED MLOPS SECTION: BYOI (Build Your Own Intelligence) */}
      <section id="byoi-mlops" className="py-24 lg:py-32 border-b border-slate-200 bg-slate-950 text-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 items-end mb-16">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 bg-blue-900/60 border border-blue-700 text-blue-300 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                <Cpu size={14} /> Full-Stack MLOps Engine
              </div>
              <h2 className="mt-5 text-4xl sm:text-5xl font-semibold tracking-[-0.03em] text-white leading-tight">
                BYOI: Build Your Own Intelligence
              </h2>
              <p className="mt-5 text-lg text-slate-300 leading-relaxed max-w-3xl">
                A modern no-code and developer-first MLOps platform for Large Language Models. Fine-tune open weights with Unsloth 4-bit QLoRA, stream live SSE loss curves, export Ollama Modelfiles + GGUF binaries, and run offline on-device inference via the dedicated Flutter mobile suite.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <div className="inline-flex rounded-lg border border-white/10 p-1 bg-slate-900 text-sm font-medium">
                <button
                  onClick={() => setByoiSubTab("pipeline")}
                  className={`px-4 py-2 transition-colors ${
                    byoiSubTab === "pipeline"
                      ? "bg-blue-600 text-white font-semibold shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Web Studio & Canvas
                </button>
                <button
                  onClick={() => setByoiSubTab("mobile")}
                  className={`px-4 py-2 transition-colors ${
                    byoiSubTab === "mobile"
                      ? "bg-blue-600 text-white font-semibold shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Mobile On-Device Suite
                </button>
                <button
                  onClick={() => setByoiSubTab("telemetry")}
                  className={`px-4 py-2 transition-colors ${
                    byoiSubTab === "telemetry"
                      ? "bg-blue-600 text-white font-semibold shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Live SSE Telemetry
                </button>
                <button
                  onClick={() => setByoiSubTab("deployment")}
                  className={`px-4 py-2 transition-colors ${
                    byoiSubTab === "deployment"
                      ? "bg-blue-600 text-white font-semibold shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Ollama & Cloud Deploy
                </button>
              </div>
            </div>
          </div>

          {/* SubTab 1: Web Studio & Node Canvas */}
          {byoiSubTab === "pipeline" && (
            <div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {byoiCoreFeatures.map((feat) => {
                  const Icon = feat.icon;
                  return (
                    <div
                      key={feat.title}
                      className="bg-slate-900/90 border border-white/10 p-8 rounded-xl flex flex-col justify-between hover:border-blue-500/50 hover:bg-slate-900 transition-all"
                    >
                      <div>
                        <div className="w-12 h-12 rounded-lg bg-blue-950/80 text-blue-400 flex items-center justify-center mb-6">
                          <Icon size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white tracking-tight">{feat.title}</h3>
                        <div className="text-xs font-semibold text-blue-400 mt-1 mb-3">{feat.subtitle}</div>
                        <p className="text-slate-400 text-sm leading-relaxed">{feat.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Visual Node Pipeline Callout */}
              <div className="mt-12 bg-slate-900 border border-white/10 p-8 rounded-2xl">
                <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider mb-2">
                  <Workflow size={16} /> Visual Workflow Architecture (AIPipelineCanvas)
                </div>
                <div className="grid md:grid-cols-5 gap-4 mt-6 text-center font-mono text-xs">
                  <div className="p-4 bg-slate-950 border border-white/10 rounded-lg">
                    <HardDrive className="mx-auto mb-2 text-blue-400" size={20} />
                    <div className="font-bold text-white">1. Model Picker</div>
                    <div className="text-slate-400 text-[11px] mt-1">Ollama / Local Tags</div>
                  </div>
                  <div className="p-4 bg-slate-950 border border-white/10 rounded-lg">
                    <Sliders className="mx-auto mb-2 text-blue-400" size={20} />
                    <div className="font-bold text-white">2. Dataset Studio</div>
                    <div className="text-slate-400 text-[11px] mt-1">CSV/JSONL Mapper</div>
                  </div>
                  <div className="p-4 bg-slate-950 border border-white/10 rounded-lg">
                    <Cpu className="mx-auto mb-2 text-blue-400" size={20} />
                    <div className="font-bold text-white">3. Training Worker</div>
                    <div className="text-slate-400 text-[11px] mt-1">Unsloth QLoRA</div>
                  </div>
                  <div className="p-4 bg-slate-950 border border-white/10 rounded-lg">
                    <BarChart3 className="mx-auto mb-2 text-blue-400" size={20} />
                    <div className="font-bold text-white">4. Live Monitor</div>
                    <div className="text-slate-400 text-[11px] mt-1">SSE Stream Loss</div>
                  </div>
                  <div className="p-4 bg-slate-950 border border-white/10 rounded-lg">
                    <PlayCircle className="mx-auto mb-2 text-blue-400" size={20} />
                    <div className="font-bold text-white">5. Export & Chat</div>
                    <div className="text-slate-400 text-[11px] mt-1">Modelfile + Playground</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SubTab 2: Mobile On-Device Suite (Flutter App) */}
          {byoiSubTab === "mobile" && (
            <div className="border border-white/10 bg-slate-900 p-8 lg:p-12 rounded-2xl">
              <div className="grid lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-950 border border-blue-800 px-3 py-1">
                    BYOI Mobile On-Device LLM Hub
                  </span>
                  <h3 className="text-3xl font-bold text-white mt-4">
                    Run Fine-Tuned Models Offline Directly on Your Phone
                  </h3>
                  <p className="mt-4 text-slate-300 text-sm leading-relaxed">
                    BYOI includes a native Flutter mobile client paired with a lightweight Python Mobile Gateway (Port 8001). Browse fine-tuned models created on the web studio, audit mobile hardware RAM compatibility, download quantized GGUFs, and chat offline with zero latency and zero cloud dependency.
                  </p>

                  <div className="mt-8 grid sm:grid-cols-2 gap-4">
                    {mobileFeatures.map((m) => {
                      const MIcon = m.icon;
                      return (
                        <div key={m.title} className="p-4 bg-slate-950 border border-white/10 rounded-xl">
                          <div className="w-8 h-8 rounded bg-blue-950 text-blue-400 flex items-center justify-center mb-3">
                            <MIcon size={16} />
                          </div>
                          <div className="text-sm font-bold text-white">{m.title}</div>
                          <p className="text-xs text-slate-400 mt-1 leading-relaxed">{m.desc}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="lg:col-span-6 bg-slate-950 border border-white/10 p-6 rounded-2xl font-mono text-xs text-slate-300">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4 text-slate-400">
                    <span className="flex items-center gap-2">
                      <Smartphone size={15} className="text-blue-400" />
                      Mobile Hardware Pre-Download Audit
                    </span>
                    <span className="text-emerald-400 font-semibold">PASS: 8GB+ RAM</span>
                  </div>
                  <pre className="text-slate-300 leading-relaxed overflow-x-auto">{`[DEVICE SCAN] Architecture: ARM64-v8a (Apple A-Series / Snapdragon)
[HARDWARE] Total RAM: 8.0 GB | Available: 4.2 GB
[STORAGE] Total Flash: 256 GB | Free: 114.8 GB

AUDIT REPORT FOR: llama3.2-3b-q4_k_m.gguf
├─ Required Memory: 3.2 GB RAM (VRAM simulation)
├─ Download Size: 2.18 GB
├─ Status: 🟢 Fully Compatible (Safe for Local Mobile Execution)
└─ Recommendation: Peak tokens/sec expected ~18-24 t/s on NPU

[INFERENCE BENCHMARK]
├─ Time-to-First-Token (TTFT): 118 ms
├─ Generation Speed: 21.4 tokens/sec
└─ Battery Thermal Delta: Normal (+1.2°C)`}</pre>
                </div>
              </div>
            </div>
          )}

          {/* SubTab 3: Real-Time SSE Telemetry */}
          {byoiSubTab === "telemetry" && (
            <div className="border border-white/10 bg-slate-900 p-8 lg:p-10 rounded-2xl">
              <div className="grid lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-950 border border-blue-800 px-3 py-1">
                    Live Telemetry & SSE Stream
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mt-4">
                    Real-Time Loss Curves & GPU Memory Telemetry
                  </h3>
                  <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                    BYOI streams training logs, gradient step updates, loss metrics, and GPU VRAM utilization via Server-Sent Events (FastAPI SSE endpoints) straight into visual Recharts monitors with ETA progression.
                  </p>
                  <div className="mt-8 space-y-3 font-mono text-xs">
                    <div className="flex justify-between p-3 bg-slate-950 rounded border border-white/5">
                      <span className="text-slate-400">Target Base Model</span>
                      <span className="text-blue-400 font-bold">Llama-3.2-3B-Instruct (4-bit QLoRA)</span>
                    </div>
                    <div className="flex justify-between p-3 bg-slate-950 rounded border border-white/5">
                      <span className="text-slate-400">Training Loss (Initial vs Current)</span>
                      <span className="text-emerald-400 font-bold">2.4182 → 0.4129 (-82.9%)</span>
                    </div>
                    <div className="flex justify-between p-3 bg-slate-950 rounded border border-white/5">
                      <span className="text-slate-400">GPU VRAM Utilization</span>
                      <span className="text-slate-200">5.8 GB / 16.0 GB (36.2%)</span>
                    </div>
                    <div className="flex justify-between p-3 bg-slate-950 rounded border border-white/5">
                      <span className="text-slate-400">Training Presets</span>
                      <span className="text-slate-200">Quick 1-Epoch | Balanced 3-Epoch | Deep 5-Epoch</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 bg-slate-950 border border-white/10 p-6 rounded-xl font-mono text-xs text-slate-300">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4 text-slate-400">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      SSE Worker Log Stream
                    </span>
                    <span className="text-blue-400">Worker: Unsloth QLoRA Engine</span>
                  </div>
                  <pre className="text-slate-300 leading-relaxed overflow-x-auto">{`[INFO] Ingestion: Processed 2,840 instruction rows (CSV format).
[INFO] Tokenizer: Applied ChatML template with max_seq_len=2048.
[TRAIN] Step 20/150: Loss = 1.8421 | VRAM = 5.4GB | ETA: 4m 12s
[TRAIN] Step 60/150: Loss = 1.1094 | VRAM = 5.7GB | ETA: 2m 58s
[TRAIN] Step 100/150: Loss = 0.6842 | VRAM = 5.8GB | ETA: 1m 32s
[TRAIN] Step 150/150: Loss = 0.4129 | VRAM = 5.8GB | FINISHED.
[INFO] Quantization: Merging 4-bit LoRA adapter into base weights.
[SUCCESS] Exported GGUF format: byoi-custom-3b-q4_k_m.gguf
[SUCCESS] Generated Ollama Modelfile with temperature=0.2, top_p=0.9`}</pre>
                </div>
              </div>
            </div>
          )}

          {/* SubTab 4: Deployment & GCP Cloud Build */}
          {byoiSubTab === "deployment" && (
            <div className="border border-white/10 bg-slate-900 p-8 lg:p-10 rounded-2xl">
              <div className="grid lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-950 border border-blue-800 px-3 py-1">
                    Universal Runtime Deployment
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mt-4">
                    Local Ollama CLI + Google Cloud Run Deploy
                  </h3>
                  <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                    BYOI supports both local offline running and enterprise cloud deployment. With included Dockerfiles, Cloud Build configurations (cloudbuild.yaml), and automated GCP deployment scripts (deploy_gcp.sh), teams can scale model APIs to serverless container fleets in minutes.
                  </p>
                  <div className="mt-6 space-y-3">
                    <div className="p-3 bg-slate-950 border border-blue-600/40 rounded-lg font-mono text-xs">
                      <div className="text-slate-400 mb-1">Local CLI Execution:</div>
                      <code className="text-blue-400">ollama create my-custom-model -f Modelfile</code>
                    </div>
                    <div className="p-3 bg-slate-950 border border-white/10 rounded-lg font-mono text-xs">
                      <div className="text-slate-400 mb-1">Google Cloud Platform Deploy:</div>
                      <code className="text-emerald-400">./deploy_gcp.sh --project=my-ai-cloud --region=us-central1</code>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 bg-slate-950 border border-white/10 p-6 rounded-xl font-mono text-xs text-slate-300">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4 text-slate-400">
                    <span>Generated Modelfile</span>
                    <span className="text-blue-400">Runtime: Ollama Engine</span>
                  </div>
                  <pre className="text-blue-300">{`FROM ./byoi-custom-3b-q4_k_m.gguf

TEMPLATE """{{ if .System }}<|start_header_id|>system<|end_header_id|>
{{ .System }}<|eot_id|>{{ end }}{{ if .Prompt }}<|start_header_id|>user<|end_header_id|>
{{ .Prompt }}<|eot_id|>{{ end }}<|start_header_id|>assistant<|end_header_id|>
{{ .Response }}<|eot_id|>"""

PARAMETER stop "<|start_header_id|>"
PARAMETER stop "<|end_header_id|>"
PARAMETER stop "<|eot_id|>"
PARAMETER temperature 0.2
PARAMETER top_p 0.9

SYSTEM """You are a specialized enterprise intelligence trained via BYOI."""`}</pre>
                </div>
              </div>
            </div>
          )}

          {/* BYOI Feature Checklist */}
          <div className="mt-16 pt-10 border-t border-white/10 grid md:grid-cols-4 gap-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-blue-400 shrink-0 mt-1" size={18} />
              <div>
                <div className="font-bold text-white text-sm">Visual Node Canvas</div>
                <div className="text-xs text-slate-400 mt-0.5">Interactive drag-and-drop training pipeline builder with custom step configs.</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-blue-400 shrink-0 mt-1" size={18} />
              <div>
                <div className="font-bold text-white text-sm">Mobile On-Device Hub</div>
                <div className="text-xs text-slate-400 mt-0.5">Flutter mobile app with pre-download hardware audit and offline chat.</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-blue-400 shrink-0 mt-1" size={18} />
              <div>
                <div className="font-bold text-white text-sm">Real-time SSE Streaming</div>
                <div className="text-xs text-slate-400 mt-0.5">Loss curves, VRAM tracking, and step progression streaming over HTTP.</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-blue-400 shrink-0 mt-1" size={18} />
              <div>
                <div className="font-bold text-white text-sm">GCP & Cloud Run Ready</div>
                <div className="text-xs text-slate-400 mt-0.5">Includes Dockerfiles and automated Cloud Build scripts for immediate scaling.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Technical Product: Medical Documentation & Clinical Intelligence Platform */}
      <section id="medical-documentation-platform" className="py-24 lg:py-32 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 items-end mb-16">
            <div className="lg:col-span-8">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1">
                Clinical Healthcare Platform
              </span>
              <h2 className="mt-5 text-4xl sm:text-5xl font-semibold tracking-[-0.03em] text-slate-950 leading-tight">
                Medical Documentation & Clinical Records Intelligence System
              </h2>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-3xl">
                An end-to-end clinical documentation ecosystem that unifies patient-uploaded medical records, multimodal document vision, conversational RAG search, and ambient clinical scribing into a high-performance clinical workflow.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <div className="inline-flex rounded-lg border border-slate-200 p-1 bg-slate-100 text-sm font-medium">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`px-4 py-2 transition-colors ${
                    activeTab === "overview"
                      ? "bg-white text-blue-700 font-semibold shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  System Modules
                </button>
                <button
                  onClick={() => setActiveTab("extraction")}
                  className={`px-4 py-2 transition-colors ${
                    activeTab === "extraction"
                      ? "bg-white text-blue-700 font-semibold shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  AI Extraction
                </button>
                <button
                  onClick={() => setActiveTab("workflow")}
                  className={`px-4 py-2 transition-colors ${
                    activeTab === "workflow"
                      ? "bg-white text-blue-700 font-semibold shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Clinical Pipeline
                </button>
              </div>
            </div>
          </div>

          {/* Tab 1: System Modules */}
          {activeTab === "overview" && (
            <div className="grid md:grid-cols-3 gap-8">
              {corePillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.id}
                    className="border border-slate-200 bg-white p-8 lg:p-10 flex flex-col justify-between hover:border-blue-400 hover:shadow-lg transition-all"
                  >
                    <div>
                      <div className="w-14 h-14 bg-blue-50 text-blue-700 flex items-center justify-center rounded-xl mb-6">
                        <Icon size={28} />
                      </div>
                      <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                        {pillar.badge}
                      </span>
                      <h3 className="text-2xl font-bold tracking-tight text-slate-950 mt-2">
                        {pillar.title}
                      </h3>
                      <p className="text-sm font-medium text-slate-500 mt-1 mb-4">
                        {pillar.subtitle}
                      </p>
                      <p className="text-slate-600 leading-relaxed text-sm">
                        {pillar.description}
                      </p>

                      <div className="mt-8 pt-6 border-t border-slate-100">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-4">
                          Key Capabilities
                        </h4>
                        <ul className="space-y-3 text-sm text-slate-600">
                          {pillar.highlights.map((h, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                              <CheckCircle2 size={16} className="text-blue-600 shrink-0 mt-0.5" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-100">
                      <a
                        href="/contact"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
                      >
                        Request deployment info <ArrowRight size={15} />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Tab 2: AI Extraction & Document Intelligence */}
          {activeTab === "extraction" && (
            <div className="border border-slate-200 bg-slate-50/50 p-8 lg:p-12">
              <div className="max-w-3xl mb-10">
                <h3 className="text-2xl lg:text-3xl font-bold tracking-tight text-slate-950">
                  Multimodal Document Perception & Clinical Structuring
                </h3>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  When a patient photographs or uploads a lab report, prescription, or discharge summary, the neural extraction pipeline reads and structures high-value medical entities into an interoperable schema.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {extractionFeatures.map((feat) => {
                  const Icon = feat.icon;
                  return (
                    <div key={feat.title} className="bg-white border border-slate-200 p-6 rounded-lg shadow-sm">
                      <div className="w-10 h-10 bg-blue-50 text-blue-700 rounded-lg flex items-center justify-center mb-4">
                        <Icon size={20} />
                      </div>
                      <h4 className="text-base font-semibold text-slate-950">{feat.title}</h4>
                      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{feat.desc}</p>
                    </div>
                  );
                })}
              </div>

              {/* Sample Document Extraction Visualizer */}
              <div className="mt-10 bg-slate-950 text-slate-200 p-6 lg:p-8 rounded-xl font-mono text-xs overflow-x-auto">
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4 text-slate-400">
                  <span>Structured Output Schema (JSON)</span>
                  <span className="text-blue-400">Engine: Multimodal Clinical Vision Pipeline</span>
                </div>
                <pre>{`{
  "category": "Lab Pathology",
  "documentTitle": "Comprehensive Metabolic Panel & Lipid Screen",
  "vitals": {
    "bloodPressure": "120/80 mmHg",
    "heartRate": "72 bpm",
    "fastingGlucose": "92 mg/dL",
    "totalCholesterol": "184 mg/dL"
  },
  "medicationsDetected": [
    { "name": "Atorvastatin", "dosage": "20mg", "frequency": "Once daily at bedtime" }
  ],
  "diagnosedConditions": ["Hyperlipidemia - Controlled", "Normal Fasting Glycemia"],
  "summary": "Routine metabolic and lipid panel within baseline normal reference ranges. Fasting blood glucose normal.",
  "keywords": ["Lipid Profile", "Cholesterol", "Glucose", "Cardiology"],
  "patientProfileId": "fam_parent_01"
}`}</pre>
              </div>
            </div>
          )}

          {/* Tab 3: Workflow */}
          {activeTab === "workflow" && (
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="border border-slate-200 bg-white p-8">
                <div className="text-blue-700 font-bold text-sm tracking-wider uppercase mb-2">Phase 1</div>
                <h3 className="text-xl font-bold text-slate-950">Patient Uploads & Neural Digitization</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  The user photographs physical medical records or uploads PDFs. Multimodal AI classifies the document, extracts key health metrics, updates trend charts, and indexes text for conversational queries.
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <Clock size={14} /> Takes ~2.5 seconds per multi-page report
                </div>
              </div>

              <div className="border border-slate-200 bg-white p-8">
                <div className="text-blue-700 font-bold text-sm tracking-wider uppercase mb-2">Phase 2</div>
                <h3 className="text-xl font-bold text-slate-950">Secure QR Consultation Handshake</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  At the clinic, the patient presents a dynamic QR code. The physician scans it using the clinical documentation portal, establishing a zero-trust, time-delimited link to access allergies, historical tests, and medication records.
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <QrCode size={14} /> Ephemeral cryptographic token verification
                </div>
              </div>

              <div className="border border-slate-200 bg-white p-8">
                <div className="text-blue-700 font-bold text-sm tracking-wider uppercase mb-2">Phase 3</div>
                <h3 className="text-xl font-bold text-slate-950">Ambient Clinical Scribe & SOAP Notes</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  During consultation, the ambient scribe listens in the background. It structures dialogue into standardized SOAP notes, draft prescriptions, and follow-up guidance, saving up to 2 hours of doctor documentation per day.
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <Mic size={14} /> Generates standardized EHR/EMR-ready notes
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Technical Architecture Deep-Dive */}
      <section id="architecture" className="py-24 lg:py-32 bg-slate-950 text-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-950/60 border border-blue-800 px-3 py-1">
              Engineering Deep Dive
            </span>
            <h2 className="mt-5 text-4xl sm:text-5xl font-semibold tracking-[-0.03em] text-white">
              End-to-End System Architecture
            </h2>
            <p className="mt-5 text-lg text-slate-400 leading-relaxed">
              Designed with enterprise durability, real-time vector search, and strict healthcare compliance guidelines.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technicalArchitecture.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="bg-slate-900/80 border border-white/10 p-8 rounded-xl hover:border-blue-500/50 transition-colors"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-blue-400 text-sm font-mono font-bold">{item.step}</span>
                    <div className="w-10 h-10 rounded-lg bg-blue-950/80 text-blue-400 flex items-center justify-center">
                      <Icon size={20} />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Privacy & Governance Callout */}
          <div className="mt-16 bg-blue-950/30 border border-blue-800/40 p-8 lg:p-10 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 text-blue-400 font-semibold text-sm">
                <ShieldCheck size={20} />
                <span>HIPAA-Conscious & Zero-Knowledge Security Architecture</span>
              </div>
              <h3 className="text-2xl font-bold text-white mt-2">
                Patient Data Privacy as an Architectural Fundamental
              </h3>
              <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                API keys and proprietary inference endpoints are isolated in server-side microservices. Documents are stored in secure buckets with client-side isolation, zero-knowledge encryption, and role-based access rules.
              </p>
            </div>
            <a
              href="/contact"
              className="shrink-0 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 text-sm transition-colors"
            >
              Discuss Compliance & Security
            </a>
          </div>
        </div>
      </section>

      {/* Natural Language RAG & Search Showcase */}
      <section className="py-24 lg:py-32 border-b border-slate-200 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1">
                Conversational RAG Search
              </span>
              <h2 className="mt-5 text-4xl sm:text-5xl font-semibold tracking-[-0.03em] text-slate-950 leading-tight">
                Query medical history in natural language with source grounding.
              </h2>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed">
                Rather than sifting through physical files and scanned PDFs, patients, caregivers, and clinicians can query longitudinal medical records through semantic vector searches grounded strictly in verified clinical documents.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "When was my last tetanus vaccination, and is a booster due?",
                  "Show me the trend of my HbA1c levels across the past two years.",
                  "What was the recommended dosage for my thyroid medication in March?",
                  "Summarize the radiology findings from my abdominal ultrasound.",
                ].map((query, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 border border-slate-200 text-slate-800 text-sm font-medium">
                    <Search size={16} className="text-blue-600 shrink-0" />
                    <span>&ldquo;{query}&rdquo;</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="border border-slate-300 rounded-2xl p-6 lg:p-8 bg-slate-50 shadow-sm">
                <div className="flex items-center gap-3 pb-4 border-b border-slate-200 mb-6">
                  <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                    MDI
                  </div>
                  <div>
                    <div className="font-bold text-sm text-slate-900">Medical Document Intelligence Assistant</div>
                    <div className="text-xs text-emerald-600 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Grounded in verified clinical records
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-sm">
                  <div className="bg-blue-600 text-white p-4 rounded-xl rounded-tr-none ml-auto max-w-[85%]">
                    When was Dad&apos;s last cardiologist visit and what was his blood pressure reading?
                  </div>

                  <div className="bg-white border border-slate-200 text-slate-800 p-5 rounded-xl rounded-tl-none mr-auto max-w-[90%] space-y-3">
                    <p>
                      Based on Dad&apos;s uploaded records, his last cardiology consultation was on <strong>January 14, 2026</strong> with Dr. Sarah Jenkins at City Heart Center.
                    </p>
                    <div className="p-3 bg-slate-50 border-l-4 border-blue-600 text-xs text-slate-700 space-y-1">
                      <div><strong>Recorded Blood Pressure:</strong> 128/82 mmHg</div>
                      <div><strong>Resting Heart Rate:</strong> 68 bpm</div>
                      <div><strong>Notes:</strong> ECG showed normal sinus rhythm. Continued on Lisinopril 10mg.</div>
                    </div>
                    <p className="text-xs text-slate-500">
                      Source: <em>Cardiology_Consultation_Jan2026.pdf (Page 2)</em>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Companion Products from Sicada Digital */}
      <section className="py-24 lg:py-32 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1">
              Complementary Enterprise Products
            </span>
            <h2 className="mt-5 text-4xl sm:text-5xl font-semibold tracking-[-0.03em] text-slate-950">
              More Software Products Engineered by Sicada Digital
            </h2>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              In addition to MLOps and medical documentation intelligence, Sicada builds bespoke and enterprise software solutions for customer intelligence, cybersecurity, and operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {companionProducts.map((prod) => (
              <div key={prod.name} className="bg-white border border-slate-200 p-8 flex flex-col justify-between hover:border-slate-400 transition-colors">
                <div>
                  <span className="text-xs font-semibold text-blue-700 uppercase tracking-wide">
                    {prod.category}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-950 mt-2">{prod.name}</h3>
                  <p className="mt-3 text-slate-600 text-sm leading-relaxed">{prod.description}</p>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-900">
                    <Zap size={14} className="text-blue-600" />
                    <span>{prod.metrics}</span>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <a href={prod.link} className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800">
                    Learn more <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-950 text-white py-24 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-[-0.03em]">
              Interested in deploying or piloting our products?
            </h2>
            <p className="mt-5 text-lg text-slate-300 max-w-3xl leading-relaxed">
              Whether you are looking to set up the BYOI MLOps fine-tuning engine (with the Flutter mobile on-device client) or evaluating our medical documentation platform, our engineering team is available for live technical walkthroughs and pilot deployments.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <a
              href="/contact"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-semibold text-base transition-colors"
            >
              Schedule a Technical Walkthrough <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
