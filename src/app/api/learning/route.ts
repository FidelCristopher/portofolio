import { NextResponse } from "next/server";

export interface SessionMeta {
  id: string;
  category: "nlp" | "compbio" | "compvis" | "deeplearning" | "speechrecognition";
  sessionNum: string;
  title: string;
  topic: string;
  githubUrl: string;
  description: string;
  tags: string[];
}

// Curated knowledge base for NLP lab sessions
const defaultNlpSessions: Record<string, SessionMeta> = {
  "Sesi 1": {
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
  "Sesi 2": {
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
  "Sesi 3": {
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
  "Sesi 4": {
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
  "Sesi 8": {
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
  "Sesi 9": {
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
  "Sesi 11": {
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
};

// Curated knowledge base for Computational Biology lab sessions
const defaultCompBioSessions: Record<string, SessionMeta> = {
  "Sesi 1": {
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
  "Sesi 2": {
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
  "Sesi 4": {
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
  "Sesi 5": {
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
};

// Curated knowledge base for Computer Vision lab sessions
const defaultCompVisSessions: Record<string, SessionMeta> = {
  "Sesi 1": {
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
  "Sesi 2": {
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
  "Sesi 3": {
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
  "Sesi 4": {
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
  "Sesi 5": {
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
  "Sesi 6": {
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
  "Sesi 8": {
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
  "Sesi 9": {
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
  "Sesi 11": {
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
  "LatihanQuiz.py": {
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
};

// Curated knowledge base for Deep Learning lab sessions
const defaultDeepLearningSessions: Record<string, SessionMeta> = {
  "Sesi 1": {
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
  "Sesi 2": {
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
  "Sesi 3": {
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
  "Sesi 4": {
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
  "latihan": {
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
};

// Curated knowledge base for Speech Recognition lab sessions
const defaultSpeechSessions: Record<string, SessionMeta> = {
  "Latihan_SR": {
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
  "Sesi 2": {
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
  "Sesi 3": {
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
  "Sesi 4": {
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
};

async function fetchRepoSessions(
  repoName: string,
  category: "nlp" | "compbio" | "compvis" | "deeplearning" | "speechrecognition",
  curatedMap: Record<string, SessionMeta>
): Promise<SessionMeta[]> {
  try {
    const headers: Record<string, string> = {
      Accept: "application/vnd.github.v3+json",
      "User-Agent": "Fidel-Portfolio-Learning"
    };

    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const res = await fetch(`https://api.github.com/repos/FidelCristopher/${repoName}/contents`, {
      headers,
      next: { revalidate: 300 }
    });

    if (!res.ok) return Object.values(curatedMap);

    const items = await res.json();
    if (!Array.isArray(items)) return Object.values(curatedMap);

    const dirItems = items.filter(
      (item) => item.type === "dir" && (item.name.toLowerCase().includes("sesi") || item.name.toLowerCase().includes("session") || item.name.toLowerCase().includes("quiz") || item.name.toLowerCase().includes("latihan"))
    );

    const sessions: SessionMeta[] = dirItems.map((dir) => {
      if (curatedMap[dir.name]) {
        return curatedMap[dir.name];
      }

      const numMatch = dir.name.match(/\d+/);
      const numFormatted = numMatch ? numMatch[0].padStart(2, "0") : "Mod";
      const cleanTitle = dir.name.replace(/[-_.]/g, " ");

      const categoryLabels = {
        nlp: "NLP Advanced Module",
        compbio: "Computational Biology Module",
        compvis: "Computer Vision Module",
        deeplearning: "Deep Learning Module",
        speechrecognition: "Speech Recognition Module"
      };

      return {
        id: `${category}-${dir.name.toLowerCase().replace(/[\s_.]+/g, "-")}`,
        category,
        sessionNum: `${numFormatted}`,
        title: `${cleanTitle} Module`,
        topic: categoryLabels[category],
        githubUrl: dir.html_url || `https://github.com/FidelCristopher/${repoName}/tree/main/${encodeURIComponent(dir.name)}`,
        description: `Practical implementation and source code experiments for ${dir.name}. Automatically synchronized from repository FidelCristopher/${repoName}.`,
        tags: [category.toUpperCase(), "Python", "Computer Science", cleanTitle]
      };
    });

    sessions.sort((a, b) => {
      const numA = parseInt(a.sessionNum.replace(/\D/g, "") || "99", 10);
      const numB = parseInt(b.sessionNum.replace(/\D/g, "") || "99", 10);
      return numA - numB;
    });

    return sessions.length > 0 ? sessions : Object.values(curatedMap);
  } catch (err) {
    return Object.values(curatedMap);
  }
}

export async function GET() {
  const [nlpSessions, compBioSessions, compVisSessions, deepLearningSessions, speechSessions] = await Promise.all([
    fetchRepoSessions("lab-nlp", "nlp", defaultNlpSessions),
    fetchRepoSessions("lab-compbio", "compbio", defaultCompBioSessions),
    fetchRepoSessions("lab-compvis", "compvis", defaultCompVisSessions),
    fetchRepoSessions("lab-deeplearning", "deeplearning", defaultDeepLearningSessions),
    fetchRepoSessions("lab-speechrecognition", "speechrecognition", defaultSpeechSessions)
  ]);

  return NextResponse.json({
    source: "live",
    nlpSessions,
    compBioSessions,
    compVisSessions,
    deepLearningSessions,
    speechSessions,
    allSessions: [...deepLearningSessions, ...compVisSessions, ...speechSessions, ...nlpSessions, ...compBioSessions]
  });
}
