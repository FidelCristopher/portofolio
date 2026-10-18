"use client";

import React, { useState, useMemo, useEffect } from "react";

interface SessionMeta {
  id: string;
  category: "nlp" | "compbio" | "compvis" | "deeplearning" | "speechrecognition";
  sessionNum: string;
  title: string;
  topic: string;
  githubUrl: string;
  description: string;
  tags: string[];
}

const defaultNlpSessions: SessionMeta[] = [
  {
    id: "nlp-sesi-1",
    category: "nlp",
    sessionNum: "01",
    title: "Text Tokenization & Stopwords Filtering",
    topic: "Text Preprocessing Foundations",
    githubUrl: "https://github.com/FidelCristopher/lab-nlp/tree/main/Sesi%201",
    description:
      "Fundamental natural language processing techniques: segmenting raw paragraph text into sentences (sent_tokenize) and words (word_tokenize), filtering punctuation characters, and removing domain-specific stop words using NLTK corpus.",
    tags: ["NLP", "Tokenization", "NLTK", "Stopwords", "Text Cleaning", "Python"]
  },
  {
    id: "nlp-sesi-2",
    category: "nlp",
    sessionNum: "02",
    title: "Stemming & WordNet Lemmatization",
    topic: "Morphological Analysis",
    githubUrl: "https://github.com/FidelCristopher/lab-nlp/tree/main/Sesi%202",
    description:
      "Morphological text reduction comparing rule-based algorithmic stemmers (PorterStemmer, LancasterStemmer) against vocabulary-aware WordNetLemmatizer to normalize inflectional variants back to canonical base words.",
    tags: ["NLP", "Stemming", "Lemmatization", "WordNet", "Lancaster", "NLTK", "Python"]
  },
  {
    id: "nlp-sesi-3",
    category: "nlp",
    sessionNum: "03",
    title: "POS Tagging, Frequency Distribution & NER",
    topic: "Syntactic & Semantic Tagging",
    githubUrl: "https://github.com/FidelCristopher/lab-nlp/tree/main/Sesi%203",
    description:
      "Grammatical part-of-speech classification (pos_tag), term frequency distribution analysis (FreqDist), chunking rules, and Named Entity Recognition (ne_chunk) to identify proper nouns and contextual syntactic patterns in documents.",
    tags: ["NLP", "POS Tagging", "NER", "FreqDist", "Chunking", "NLTK", "Syntax"]
  },
  {
    id: "nlp-sesi-4",
    category: "nlp",
    sessionNum: "04",
    title: "End-to-End NLP Preprocessing & Emotion Classifier",
    topic: "Pipeline & Model Serialization",
    githubUrl: "https://github.com/FidelCristopher/lab-nlp/tree/main/Sesi%204",
    description:
      "Complete automated text pipeline: cleaning noisy comment datasets (emotion_comment.csv), tokenization, POS-informed lemmatization, feature extraction, and training a sentiment/emotion text classifier exported as model_classifier.pkl.",
    tags: ["NLP", "Text Classification", "Preprocessing Pipeline", "Emotion Analysis", "Scikit-Learn", "Pickle"]
  },
  {
    id: "nlp-sesi-8",
    category: "nlp",
    sessionNum: "08",
    title: "Language Modeling with N-Grams & Cosine Similarity",
    topic: "Vectorization & Document Distance",
    githubUrl: "https://github.com/FidelCristopher/lab-nlp/tree/main/Sesi%208",
    description:
      "Unigram, Bigram, and Trigram language modeling using scikit-learn CountVectorizer. Transforming unstructured text into Bag-of-Words sparse matrices and computing document similarity metrics using Cosine Distance.",
    tags: ["NLP", "N-Gram", "CountVectorizer", "Cosine Similarity", "Vector Space", "Language Modeling"]
  },
  {
    id: "nlp-sesi-9",
    category: "nlp",
    sessionNum: "09",
    title: "Dense Word Embeddings (Word2Vec & Pre-trained GloVe)",
    topic: "Vector Semantics & Word Math",
    githubUrl: "https://github.com/FidelCristopher/lab-nlp/tree/main/Sesi%209",
    description:
      "Continuous vector representations of words. Training custom Word2Vec architectures (Skip-Gram & CBOW) using Gensim and mapping semantic word vectors with Stanford's pre-trained GloVe (100d), evaluating semantic cosine similarity.",
    tags: ["NLP", "Word2Vec", "GloVe", "Word Embeddings", "Gensim", "Semantic Similarity", "Deep Learning"]
  },
  {
    id: "nlp-sesi-11",
    category: "nlp",
    sessionNum: "11",
    title: "Real-World Job Posting Text Classifier (UAP Capstone)",
    topic: "Comprehensive ML Project",
    githubUrl: "https://github.com/FidelCristopher/lab-nlp/tree/main/Sesi%2011",
    description:
      "Real-world NLP classification on large job posting dataset (jobpostingdata.csv): multi-step cleaning, tokenization, lemmatization with POS tags, probabilistic Naive Bayes classification, and accuracy benchmarking for UAP exam criteria.",
    tags: ["NLP", "Text Classification", "Naive Bayes", "Feature Extraction", "Pandas", "UAP Exam"]
  }
];

const defaultCompBioSessions: SessionMeta[] = [
  {
    id: "compbio-sesi-1",
    category: "compbio",
    sessionNum: "01",
    title: "DNA / RNA Sequence Fundamentals & Biopython Basics",
    topic: "Molecular Sequence Representation",
    githubUrl: "https://github.com/FidelCristopher/lab-compbio/tree/main/Sesi%201",
    description:
      "Core nucleotide sequence computing using Biopython Bio.Seq: DNA/RNA strand transcription, reverse complement calculation, protein translation, and codon sequence analysis for biological data modeling.",
    tags: ["CompBio", "BioPython", "DNA Sequencing", "Genetics", "Bio.Seq", "Python"]
  },
  {
    id: "compbio-sesi-2",
    category: "compbio",
    sessionNum: "02",
    title: "GC-Content Fraction & DNA Melting Temperature (Tm)",
    topic: "Thermodynamic & Molecular Stability",
    githubUrl: "https://github.com/FidelCristopher/lab-compbio/tree/main/Sesi%202",
    description:
      "Evaluating nucleotide thermal stability by computing GC-content percentage, plotting nucleotide distributions with Matplotlib, and calculating DNA duplex melting temperature (Tm) using thermodynamic nearest-neighbor models.",
    tags: ["CompBio", "Melting Temperature", "GC-Content", "Bio.SeqUtils", "Matplotlib", "BioPython"]
  },
  {
    id: "compbio-sesi-4",
    category: "compbio",
    sessionNum: "04",
    title: "Pairwise Sequence Alignment, Edit Distance & Dot Plot",
    topic: "Global & Local Sequence Alignment",
    githubUrl: "https://github.com/FidelCristopher/lab-compbio/tree/main/Sesi%204",
    description:
      "Implementing Needleman-Wunsch (Global) and Smith-Waterman (Local) alignment algorithms with pairwise2, calculating Hamming and Levenshtein edit distance between DNA strands, and visual Dot Plot homology analysis.",
    tags: ["CompBio", "Sequence Alignment", "Pairwise2", "Levenshtein", "Hamming Distance", "Dot Plot"]
  },
  {
    id: "compbio-sesi-5",
    category: "compbio",
    sessionNum: "05",
    title: "GenBank Record Parsing & FASTA Format Processing",
    topic: "Biological Database Parsing & File I/O",
    githubUrl: "https://github.com/FidelCristopher/lab-compbio/tree/main/Sesi%205",
    description:
      "Manipulating biological database records using Bio.SeqIO: parsing complex GenBank (.gb) genome annotations, extracting feature metadata, filtering FASTA (.fasta) records, and preparing TM1 practical examination criteria.",
    tags: ["CompBio", "GenBank", "FASTA", "SeqIO", "Genomics", "Bioinformatics", "Python"]
  }
];

const defaultCompVisSessions: SessionMeta[] = [
  {
    id: "compvis-sesi-1",
    category: "compvis",
    sessionNum: "01",
    title: "Image I/O, Color Space Conversion & Pixel Manipulation",
    topic: "Image Processing Basics",
    githubUrl: "https://github.com/FidelCristopher/lab-compvis/tree/main/Sesi%201",
    description:
      "Reading and manipulating raster images with OpenCV (cv2.imread): BGR to Grayscale and RGB color space conversions (cv2.cvtColor), matrix slicing, and plotting channel histograms with Matplotlib.",
    tags: ["CompVis", "OpenCV", "Color Spaces", "Image Processing", "NumPy", "Python"]
  },
  {
    id: "compvis-sesi-2",
    category: "compvis",
    sessionNum: "02",
    title: "Histogram Equalization & Contrast Enhancement",
    topic: "Intensity Transformations",
    githubUrl: "https://github.com/FidelCristopher/lab-compvis/tree/main/Sesi%202",
    description:
      "Enhancing low-contrast images using cumulative distribution functions (CDF), global histogram equalization (cv2.equalizeHist), and contrast stretching across grayscale distributions.",
    tags: ["CompVis", "Histogram Equalization", "Contrast Enhancement", "OpenCV", "Image Processing"]
  },
  {
    id: "compvis-sesi-3",
    category: "compvis",
    sessionNum: "03",
    title: "Spatial Filtering, Convolution & Noise Reduction",
    topic: "Neighborhood Filtering",
    githubUrl: "https://github.com/FidelCristopher/lab-compvis/tree/main/Sesi%203",
    description:
      "2D spatial image convolution (cv2.filter2D), Gaussian smoothing, median filtering for impulse/salt-and-pepper noise reduction, and edge-preserving bilateral filtering on photographic datasets.",
    tags: ["CompVis", "Spatial Filtering", "Gaussian Blur", "Convolution", "Noise Reduction", "OpenCV"]
  },
  {
    id: "compvis-sesi-4",
    category: "compvis",
    sessionNum: "04",
    title: "Edge Detection & Morphological Operations",
    topic: "Boundary & Shape Analysis",
    githubUrl: "https://github.com/FidelCristopher/lab-compvis/tree/main/Sesi%204",
    description:
      "Gradient-based boundary extraction using Sobel, Scharr, and multi-stage Canny edge detection (cv2.Canny), combined with morphological erosion, dilation, opening, and closing operations.",
    tags: ["CompVis", "Edge Detection", "Canny", "Morphology", "Sobel", "Computer Vision"]
  },
  {
    id: "compvis-sesi-5",
    category: "compvis",
    sessionNum: "05",
    title: "Corner Detection (Harris & Shi-Tomasi Sub-pixel)",
    topic: "Geometric Feature Detection",
    githubUrl: "https://github.com/FidelCristopher/lab-compvis/tree/main/Sesi%205",
    description:
      "Identifying salient geometric corners using Harris Corner Detector (cv2.cornerHarris), sub-pixel corner coordinate refinement (cv2.cornerSubPix), and Shi-Tomasi Good Features to Track.",
    tags: ["CompVis", "Corner Detection", "Harris Corner", "Shi-Tomasi", "Feature Extraction"]
  },
  {
    id: "compvis-sesi-6",
    category: "compvis",
    sessionNum: "06",
    title: "Scale-Invariant Keypoints & Descriptors (SIFT, ORB, KAZE)",
    topic: "Local Feature Descriptors",
    githubUrl: "https://github.com/FidelCristopher/lab-compvis/tree/main/Sesi%206",
    description:
      "Scale-invariant feature transformation: detecting interest points and generating high-dimensional descriptors using SIFT, ORB (Oriented FAST and Rotated BRIEF), and KAZE for robust visual matching.",
    tags: ["CompVis", "SIFT", "ORB", "KAZE", "Keypoints", "Feature Matching", "OpenCV"]
  },
  {
    id: "compvis-sesi-8",
    category: "compvis",
    sessionNum: "08",
    title: "Bag of Visual Words (BoVW) & K-Means Codebooks",
    topic: "Image Classification Representation",
    githubUrl: "https://github.com/FidelCristopher/lab-compvis/tree/main/Sesi%208",
    description:
      "Constructing a Bag of Visual Words (BoVW) codebook vocabulary using vector quantization and K-Means clustering in SciPy & Scikit-Learn to represent images as visual feature frequency histograms.",
    tags: ["CompVis", "Bag of Visual Words", "BoVW", "K-Means", "Vector Quantization", "Clustering"]
  },
  {
    id: "compvis-sesi-9",
    category: "compvis",
    sessionNum: "09",
    title: "Content-Based Image Retrieval & Euclidean Distance Matching",
    topic: "Visual Search & CBIR",
    githubUrl: "https://github.com/FidelCristopher/lab-compvis/tree/main/Sesi%209",
    description:
      "Content-Based Image Retrieval (CBIR) engine: indexing image feature histograms, computing pairwise nearest neighbors with Euclidean distance, and retrieving ranked query matches.",
    tags: ["CompVis", "Feature Matching", "FLANN", "Euclidean Distance", "Image Retrieval", "CBIR"]
  },
  {
    id: "compvis-sesi-11",
    category: "compvis",
    sessionNum: "11",
    title: "Object & Face Detection with Haar Cascades",
    topic: "Object Localization & Cascades",
    githubUrl: "https://github.com/FidelCristopher/lab-compvis/tree/main/Sesi%2011",
    description:
      "Real-time object and facial landmark detection using Viola-Jones algorithm with pre-trained Haar Feature-based Cascade Classifiers (haarcascade_frontalface_default.xml) and bounding box evaluation.",
    tags: ["CompVis", "Haar Cascades", "Face Detection", "Object Detection", "CascadeClassifier", "OpenCV"]
  },
  {
    id: "compvis-quiz",
    category: "compvis",
    sessionNum: "Quiz",
    title: "SIFT Feature Matching with FLANN & Lowe's Ratio Test",
    topic: "Robust Object Recognition",
    githubUrl: "https://github.com/FidelCristopher/lab-compvis/tree/main/LatihanQuiz.py",
    description:
      "End-to-end practical pipeline: dataset preprocessing, SIFT feature extraction, FLANN-based KD-tree matcher, and Lowe's Ratio Test filtering for invariant object recognition under perspective transforms.",
    tags: ["CompVis", "SIFT", "FLANN", "Lowe's Ratio Test", "Object Recognition", "Exam Practice"]
  }
];

const defaultDeepLearningSessions: SessionMeta[] = [
  {
    id: "deeplearning-sesi-1",
    category: "deeplearning",
    sessionNum: "01",
    title: "Dataset Preprocessing & Exploratory Data Analysis (EDA)",
    topic: "Data Preparation & Neural Inputs",
    githubUrl: "https://github.com/FidelCristopher/lab-deeplearning/tree/main/Sesi%201",
    description:
      "Tabular dataset preparation for deep learning: loading banking churn and credit records (bank.csv), feature selection, data cleaning, and statistical distribution analysis for neural network input shaping.",
    tags: ["DeepLearning", "EDA", "Data Preprocessing", "Pandas", "NumPy", "Python"]
  },
  {
    id: "deeplearning-sesi-2",
    category: "deeplearning",
    sessionNum: "02",
    title: "Multilayer Perceptron (MLP) & Feedforward Neural Networks",
    topic: "Deep Feedforward Architecture",
    githubUrl: "https://github.com/FidelCristopher/lab-deeplearning/tree/main/Sesi%202",
    description:
      "Designing and training a Multi-Layer Perceptron (MLP) with TensorFlow/Keras: feature standardization with StandardScaler, Dense hidden layers with ReLU activations, Adam optimization, and MSE loss evaluation.",
    tags: ["DeepLearning", "MLP", "Neural Networks", "TensorFlow", "Keras", "Dense Layers", "Adam"]
  },
  {
    id: "deeplearning-sesi-3",
    category: "deeplearning",
    sessionNum: "03",
    title: "Convolutional Neural Networks (CNN) for Image Classification",
    topic: "2D Feature Learning & Pooling",
    githubUrl: "https://github.com/FidelCristopher/lab-deeplearning/tree/main/Sesi%203",
    description:
      "Multi-class image classification with 2D Convolutional Neural Networks (LeNet/CNN): Conv2D feature learning, MaxPooling spatial downsampling, Flatten layers, Softmax probabilities, and cross-entropy loss tracking.",
    tags: ["DeepLearning", "CNN", "Conv2D", "Image Classification", "TensorFlow", "Keras", "Computer Vision"]
  },
  {
    id: "deeplearning-sesi-4",
    category: "deeplearning",
    sessionNum: "04",
    title: "Sequence-to-Sequence (Seq2Seq) Architecture with Encoder-Decoder",
    topic: "Recurrent & Sequence Modeling",
    githubUrl: "https://github.com/FidelCristopher/lab-deeplearning/tree/main/Sesi%204",
    description:
      "Advanced sequence-to-sequence neural architecture: implementing custom sub-classed TensorFlow Keras Encoder with dense word embeddings and recurrent neural units for sequence transduction and language translation.",
    tags: ["DeepLearning", "Seq2Seq", "Encoder Decoder", "RNN", "Embeddings", "TensorFlow", "NLP"]
  },
  {
    id: "deeplearning-latihan",
    category: "deeplearning",
    sessionNum: "05",
    title: "Deep Learning Practical Assessment & Architecture Evaluation",
    topic: "Comprehensive Model Evaluation",
    githubUrl: "https://github.com/FidelCristopher/lab-deeplearning/tree/main/latihan",
    description:
      "Hands-on deep learning evaluation and architectural problem solving: neural network pipeline implementation, hyperparameter optimization, model validation on multi-feature datasets, and performance analysis.",
    tags: ["DeepLearning", "Model Evaluation", "Neural Networks", "TensorFlow", "Keras", "Quiz Exam", "Python"]
  }
];

const defaultSpeechSessions: SessionMeta[] = [
  {
    id: "speech-latihan-sr",
    category: "speechrecognition",
    sessionNum: "01",
    title: "Speech Recognition Practical Assignment & Pipeline Implementation",
    topic: "End-to-End Speech Pipeline",
    githubUrl: "https://github.com/FidelCristopher/lab-speechrecognition/tree/main/Latihan_SR",
    description:
      "Complete acoustic speech processing assignment: loading raw audio waveforms, preprocessing signal channels, STFT feature extraction, and implementing end-to-end audio classification workflows.",
    tags: ["SpeechRecognition", "Audio DSP", "Assignment", "STFT", "Feature Extraction", "Librosa", "Python"]
  },
  {
    id: "speech-sesi-2",
    category: "speechrecognition",
    sessionNum: "02",
    title: "Audio Signal Manipulation, Augmentation & Waveform I/O",
    topic: "Acoustic Signal Processing",
    githubUrl: "https://github.com/FidelCristopher/lab-speechrecognition/tree/main/Sesi%202",
    description:
      "Audio signal input/output handling with wave, soundfile, pydub, librosa, and torchaudio: volume normalization, time reversal, repetition, random gain, and fade-in/fade-out envelope shaping for audio data augmentation.",
    tags: ["SpeechRecognition", "Audio Processing", "Librosa", "Torchaudio", "PyDub", "Data Augmentation", "Python"]
  },
  {
    id: "speech-sesi-3",
    category: "speechrecognition",
    sessionNum: "03",
    title: "Audio Preprocessing, Channel Conversion & Fast Fourier Transform",
    topic: "Digital Signal Processing (DSP)",
    githubUrl: "https://github.com/FidelCristopher/lab-speechrecognition/tree/main/Sesi%203",
    description:
      "Digital audio signal processing: stereo to mono down-mixing, amplitude normalization, audio framing with padding, windowing functions, and Fast Fourier Transform (FFT) frequency spectrum decomposition using scipy.signal and scipy.fftpack.",
    tags: ["SpeechRecognition", "DSP", "FFT", "Fourier Transform", "Signal Processing", "SciPy", "Waveform"]
  },
  {
    id: "speech-sesi-4",
    category: "speechrecognition",
    sessionNum: "04",
    title: "Frame Blocking, Short-Time Fourier Transform & Spectrograms",
    topic: "Time-Frequency Acoustic Features",
    githubUrl: "https://github.com/FidelCristopher/lab-speechrecognition/tree/main/Sesi%204",
    description:
      "Time-frequency acoustic feature representation: frame blocking with hop length and overlap, reflection padding, windowing, Short-Time Fourier Transform (STFT), and plotting audio power spectrograms for acoustic speech modeling.",
    tags: ["SpeechRecognition", "STFT", "Spectrogram", "Acoustic Features", "Frame Blocking", "SciPy", "Matplotlib"]
  }
];

export function AllLearningView() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<"all" | "deeplearning" | "compvis" | "speechrecognition" | "nlp" | "compbio">("all");
  const [nlpList, setNlpList] = useState<SessionMeta[]>(defaultNlpSessions);
  const [compBioList, setCompBioList] = useState<SessionMeta[]>(defaultCompBioSessions);
  const [compVisList, setCompVisList] = useState<SessionMeta[]>(defaultCompVisSessions);
  const [deepLearningList, setDeepLearningList] = useState<SessionMeta[]>(defaultDeepLearningSessions);
  const [speechList, setSpeechList] = useState<SessionMeta[]>(defaultSpeechSessions);

  useEffect(() => {
    let isMounted = true;
    async function syncRepos() {
      try {
        const res = await fetch("/api/learning");
        if (!res.ok) return;
        const data = await res.json();
        if (data.nlpSessions && isMounted) setNlpList(data.nlpSessions);
        if (data.compBioSessions && isMounted) setCompBioList(data.compBioSessions);
        if (data.compVisSessions && isMounted) setCompVisList(data.compVisSessions);
        if (data.deepLearningSessions && isMounted) setDeepLearningList(data.deepLearningSessions);
        if (data.speechSessions && isMounted) setSpeechList(data.speechSessions);
      } catch (err) {
        // silent fallback
      }
    }
    syncRepos();
    return () => {
      isMounted = false;
    };
  }, []);

  const allSessions = useMemo(() => {
    return [...deepLearningList, ...compVisList, ...speechList, ...nlpList, ...compBioList];
  }, [deepLearningList, compVisList, speechList, nlpList, compBioList]);

  // Filter based on search and category
  const filteredSessions = useMemo(() => {
    let list = allSessions;
    if (activeCategory !== "all") {
      list = list.filter((s) => s.category === activeCategory);
    }

    const q = searchQuery.trim().toLowerCase();
    if (!q) return list;

    return list.filter((s) => {
      const titleMatch = s.title.toLowerCase().includes(q);
      const topicMatch = s.topic.toLowerCase().includes(q);
      const tagMatch = s.tags.some((t) => t.toLowerCase().includes(q));
      const descMatch = s.description.toLowerCase().includes(q);
      return titleMatch || topicMatch || tagMatch || descMatch;
    });
  }, [searchQuery, activeCategory, allSessions]);

  return (
    <div className="relative z-1 -mt-px border-x border-t border-line bg-card max-md:border-x-0">
      {/* Header Panel */}
      <header data-slot="panel-header" className="border-b border-line px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <h2 data-slot="panel-title" className="font-handwritten text-3xl font-semibold tracking-tight">
                My Learning &amp; Coursework Hub
              </h2>
              <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[11px] font-mono text-emerald-400 select-none">
                <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live GitHub Sync
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-0.5">
              Live lab modules automatically synced from{" "}
              <a
                href="https://github.com/FidelCristopher/lab-deeplearning"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline hover:text-purple-400 font-mono"
              >
                lab-deeplearning
              </a>
              {", "}
              <a
                href="https://github.com/FidelCristopher/lab-compvis"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline hover:text-amber-400 font-mono"
              >
                lab-compvis
              </a>
              {", "}
              <a
                href="https://github.com/FidelCristopher/lab-speechrecognition"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline hover:text-rose-400 font-mono"
              >
                lab-speechrecognition
              </a>
              {", "}
              <a
                href="https://github.com/FidelCristopher/lab-nlp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline hover:text-emerald-400 font-mono"
              >
                lab-nlp
              </a>
              {" & "}
              <a
                href="https://github.com/FidelCristopher/lab-compbio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline hover:text-sky-400 font-mono"
              >
                lab-compbio
              </a>
            </p>
          </div>
          <span className="font-mono text-xs text-muted-foreground">
            BINUS Computer Science
          </span>
        </div>
      </header>

      {/* Summary Stats Grid */}
      <div className="grid grid-cols-2 gap-px border-b border-line bg-line sm:grid-cols-4">
        <div className="flex flex-col gap-1 bg-background p-4">
          <span className="text-xs text-muted-foreground">Core Domains</span>
          <span className="font-mono text-base font-bold tracking-tight text-foreground">Deep Learning, Vision, Speech, NLP &amp; Bio</span>
        </div>
        <div className="flex flex-col gap-1 bg-background p-4">
          <span className="text-xs text-muted-foreground">Completed Modules</span>
          <span className="font-mono text-base font-bold tracking-tight text-emerald-400">{allSessions.length} Sessions</span>
        </div>
        <div className="flex flex-col gap-1 bg-background p-4">
          <span className="text-xs text-muted-foreground">Core Toolkits</span>
          <span className="font-mono text-base font-bold tracking-tight text-foreground">PyTorch, TensorFlow, OpenCV, Librosa</span>
        </div>
        <div className="flex flex-col gap-1 bg-background p-4">
          <span className="text-xs text-muted-foreground">Repositories</span>
          <span className="font-mono text-base font-bold tracking-tight text-foreground">5 Repos (Live Sync)</span>
        </div>
      </div>

      {/* Search Bar & Category Filter Section */}
      <div className="border-b border-line p-4 bg-muted/20">
        <div className="relative flex items-center">
          <div className="pointer-events-none absolute left-3 flex items-center justify-center text-muted-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-search"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search topic or tag (e.g. SpeechRecognition, STFT, FFT, Librosa, CNN, OpenCV, SIFT, BioPython, NLTK)..."
            className="w-full rounded-lg border border-line bg-background py-2.5 pl-10 pr-9 text-sm text-foreground placeholder:text-muted-foreground/60 transition-all outline-none focus:border-foreground/30 focus:ring-2 focus:ring-foreground/10"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-2.5 flex size-5 items-center justify-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground text-xs"
              title="Clear search"
            >
              ✕
            </button>
          )}
        </div>

        {/* Category Tabs & Quick Suggestion Pills */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-3">
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={`rounded-md px-2.5 py-1 text-xs font-mono transition-colors ${
                activeCategory === "all"
                  ? "bg-foreground text-background font-semibold"
                  : "border border-border bg-background text-muted-foreground hover:text-foreground"
              }`}
            >
              All Modules ({allSessions.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory("deeplearning")}
              className={`rounded-md px-2.5 py-1 text-xs font-mono transition-colors ${
                activeCategory === "deeplearning"
                  ? "bg-purple-500 text-white font-semibold"
                  : "border border-border bg-background text-muted-foreground hover:text-foreground"
              }`}
            >
              Deep Learning ({deepLearningList.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory("compvis")}
              className={`rounded-md px-2.5 py-1 text-xs font-mono transition-colors ${
                activeCategory === "compvis"
                  ? "bg-amber-400 text-black font-semibold"
                  : "border border-border bg-background text-muted-foreground hover:text-foreground"
              }`}
            >
              CompVis ({compVisList.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory("speechrecognition")}
              className={`rounded-md px-2.5 py-1 text-xs font-mono transition-colors ${
                activeCategory === "speechrecognition"
                  ? "bg-rose-500 text-white font-semibold"
                  : "border border-border bg-background text-muted-foreground hover:text-foreground"
              }`}
            >
              Speech ({speechList.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory("nlp")}
              className={`rounded-md px-2.5 py-1 text-xs font-mono transition-colors ${
                activeCategory === "nlp"
                  ? "bg-emerald-500 text-black font-semibold"
                  : "border border-border bg-background text-muted-foreground hover:text-foreground"
              }`}
            >
              NLP ({nlpList.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory("compbio")}
              className={`rounded-md px-2.5 py-1 text-xs font-mono transition-colors ${
                activeCategory === "compbio"
                  ? "bg-sky-500 text-black font-semibold"
                  : "border border-border bg-background text-muted-foreground hover:text-foreground"
              }`}
            >
              CompBio ({compBioList.length})
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
            {["STFT", "FFT", "Librosa", "CNN", "OpenCV", "SIFT", "BioPython", "Word2Vec"].map((suggest) => (
              <button
                key={suggest}
                type="button"
                onClick={() => setSearchQuery(suggest)}
                className={`rounded-md border px-1.5 py-0.5 font-mono text-[10px] transition-colors ${
                  searchQuery.toLowerCase() === suggest.toLowerCase()
                    ? "border-rose-500 bg-rose-500/10 text-rose-400"
                    : "border-border bg-background text-muted-foreground hover:border-foreground/30 hover:text-foreground"
                }`}
              >
                #{suggest}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 2-Column Session Cards Grid (Interactive GitHub Links) */}
      <div className="p-4 border-b border-line">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="font-handwritten text-2xl font-semibold tracking-tight text-foreground">
              {activeCategory === "all"
                ? "Coursework Modules & Source Code"
                : activeCategory === "speechrecognition"
                ? "Speech Recognition"
                : activeCategory === "deeplearning"
                ? "Deep Learning"
                : activeCategory === "compvis"
                ? "Computer Vision"
                : activeCategory === "nlp"
                ? "Natural Language Processing"
                : "Computational Biology"}
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              Click any card to inspect the corresponding Python script, Jupyter notebook, and source code on GitHub.
            </p>
          </div>
          <span className="font-mono text-xs text-muted-foreground shrink-0">
            {filteredSessions.length} of {allSessions.length} modules
          </span>
        </div>

        {filteredSessions.length > 0 ? (
          <div className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 rounded-lg overflow-hidden">
            {filteredSessions.map((session) => {
              const topicColor =
                session.category === "speechrecognition"
                  ? "text-rose-400/90"
                  : session.category === "deeplearning"
                  ? "text-purple-400/90"
                  : session.category === "compvis"
                  ? "text-amber-400/90"
                  : session.category === "compbio"
                  ? "text-sky-400/90"
                  : "text-emerald-400/90";

              return (
                <a
                  key={session.id}
                  href={session.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col justify-between bg-background p-4 transition-all duration-200 hover:bg-muted/40 cursor-pointer"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className={`text-[11px] font-mono font-medium ${topicColor}`}>
                          {session.topic}
                        </span>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-up-right text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground shrink-0"
                      >
                        <path d="M7 7h10v10"></path>
                        <path d="M7 17 17 7"></path>
                      </svg>
                    </div>

                    <h4 className="font-semibold text-base text-foreground mb-1.5 group-hover:text-emerald-400 transition-colors">
                      {session.title}
                    </h4>

                    <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                      {session.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-line/60">
                    {session.tags.map((tag) => (
                      <span
                        key={tag}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setSearchQuery(tag);
                        }}
                        className={`inline-flex items-center rounded-md border px-1.5 py-0.5 font-mono text-[10px] transition-colors ${
                          searchQuery.toLowerCase() && tag.toLowerCase().includes(searchQuery.toLowerCase())
                            ? "border-emerald-500 bg-emerald-500/10 text-emerald-400"
                            : "border-border bg-muted/50 text-muted-foreground hover:border-foreground/30 hover:text-foreground"
                        }`}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </a>
              );
            })}
          </div>
        ) : (
          <div className="flex min-h-[140px] flex-col items-center justify-center rounded-lg border border-dashed border-line bg-muted/20 p-6 text-center">
            <p className="font-handwritten text-2xl text-muted-foreground">
              No modules found matching &quot;{searchQuery}&quot;
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Try searching for &quot;SpeechRecognition&quot;, &quot;STFT&quot;, &quot;FFT&quot;, &quot;CNN&quot;, &quot;OpenCV&quot;, or &quot;BioPython&quot;.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="mt-3 text-xs font-mono text-emerald-400 underline hover:text-emerald-300"
            >
              Reset search
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
