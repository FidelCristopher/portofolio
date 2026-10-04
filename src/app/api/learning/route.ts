import { NextResponse } from "next/server";

interface SessionMeta {
  id: string;
  sessionNum: string;
  title: string;
  topic: string;
  githubUrl: string;
  description: string;
  tags: string[];
}

// Built-in curated knowledge base for existing lab sessions
const defaultSessions: Record<string, SessionMeta> = {
  "Sesi 1": {
    id: "sesi-1",
    sessionNum: "01",
    title: "Text Tokenization & Stopwords Filtering",
    topic: "Text Preprocessing Foundations",
    githubUrl: "https://github.com/FidelCristopher/lab-nlp/tree/main/Sesi%201",
    description:
      "Fundamental natural language processing techniques: segmenting raw paragraph text into sentences (sent_tokenize) and words (word_tokenize), filtering punctuation characters, and removing domain-specific stop words using NLTK corpus.",
    tags: ["NLP", "Tokenization", "NLTK", "Stopwords", "Text Cleaning", "Python"]
  },
  "Sesi 2": {
    id: "sesi-2",
    sessionNum: "02",
    title: "Stemming & WordNet Lemmatization",
    topic: "Morphological Analysis",
    githubUrl: "https://github.com/FidelCristopher/lab-nlp/tree/main/Sesi%202",
    description:
      "Morphological text reduction comparing rule-based algorithmic stemmers (PorterStemmer, LancasterStemmer) against vocabulary-aware WordNetLemmatizer to normalize inflectional variants back to canonical base words.",
    tags: ["NLP", "Stemming", "Lemmatization", "WordNet", "Lancaster", "NLTK", "Python"]
  },
  "Sesi 3": {
    id: "sesi-3",
    sessionNum: "03",
    title: "POS Tagging, Frequency Distribution & NER",
    topic: "Syntactic & Semantic Tagging",
    githubUrl: "https://github.com/FidelCristopher/lab-nlp/tree/main/Sesi%203",
    description:
      "Grammatical part-of-speech classification (pos_tag), term frequency distribution analysis (FreqDist), chunking rules, and Named Entity Recognition (ne_chunk) to identify proper nouns and contextual syntactic patterns in documents.",
    tags: ["NLP", "POS Tagging", "NER", "FreqDist", "Chunking", "NLTK", "Syntax"]
  },
  "Sesi 4": {
    id: "sesi-4",
    sessionNum: "04",
    title: "End-to-End NLP Preprocessing & Emotion Classifier",
    topic: "Pipeline & Model Serialization",
    githubUrl: "https://github.com/FidelCristopher/lab-nlp/tree/main/Sesi%204",
    description:
      "Complete automated text pipeline: cleaning noisy comment datasets (emotion_comment.csv), tokenization, POS-informed lemmatization, feature extraction, and training a sentiment/emotion text classifier exported as model_classifier.pkl.",
    tags: ["NLP", "Text Classification", "Preprocessing Pipeline", "Emotion Analysis", "Scikit-Learn", "Pickle"]
  },
  "Sesi 8": {
    id: "sesi-8",
    sessionNum: "08",
    title: "Language Modeling with N-Grams & Cosine Similarity",
    topic: "Vectorization & Document Distance",
    githubUrl: "https://github.com/FidelCristopher/lab-nlp/tree/main/Sesi%208",
    description:
      "Unigram, Bigram, and Trigram language modeling using scikit-learn CountVectorizer. Transforming unstructured text into Bag-of-Words sparse matrices and computing document similarity metrics using Cosine Distance.",
    tags: ["NLP", "N-Gram", "CountVectorizer", "Cosine Similarity", "Vector Space", "Language Modeling"]
  },
  "Sesi 9": {
    id: "sesi-9",
    sessionNum: "09",
    title: "Dense Word Embeddings (Word2Vec & Pre-trained GloVe)",
    topic: "Vector Semantics & Word Math",
    githubUrl: "https://github.com/FidelCristopher/lab-nlp/tree/main/Sesi%209",
    description:
      "Continuous vector representations of words. Training custom Word2Vec architectures (Skip-Gram & CBOW) using Gensim and mapping semantic word vectors with Stanford's pre-trained GloVe (100d), evaluating semantic cosine similarity.",
    tags: ["NLP", "Word2Vec", "GloVe", "Word Embeddings", "Gensim", "Semantic Similarity", "Deep Learning"]
  },
  "Sesi 11": {
    id: "sesi-11",
    sessionNum: "11",
    title: "Real-World Job Posting Text Classifier (UAP Capstone)",
    topic: "Comprehensive ML Project",
    githubUrl: "https://github.com/FidelCristopher/lab-nlp/tree/main/Sesi%2011",
    description:
      "Real-world NLP classification on large job posting dataset (jobpostingdata.csv): multi-step cleaning, tokenization, lemmatization with POS tags, probabilistic Naive Bayes classification, and accuracy benchmarking for UAP exam criteria.",
    tags: ["NLP", "Text Classification", "Naive Bayes", "Feature Extraction", "Pandas", "UAP Exam"]
  }
};

export async function GET() {
  try {
    const headers: Record<string, string> = {
      Accept: "application/vnd.github.v3+json",
      "User-Agent": "Fidel-Portfolio-Learning"
    };

    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const res = await fetch("https://api.github.com/repos/FidelCristopher/lab-nlp/contents", {
      headers,
      next: { revalidate: 300 } // revalidate every 5 minutes
    });

    if (!res.ok) {
      // Fallback gracefully to default curated sessions if private or rate limited
      return NextResponse.json({
        source: "fallback",
        sessions: Object.values(defaultSessions)
      });
    }

    const items = await res.json();
    if (!Array.isArray(items)) {
      return NextResponse.json({
        source: "fallback",
        sessions: Object.values(defaultSessions)
      });
    }

    // Filter directory sessions
    const dirItems = items.filter((item) => item.type === "dir" && (item.name.toLowerCase().includes("sesi") || item.name.toLowerCase().includes("session")));

    const mergedSessions: SessionMeta[] = dirItems.map((dir) => {
      // If we already have curated data for this session name
      if (defaultSessions[dir.name]) {
        return defaultSessions[dir.name];
      }

      // Automatically generate a new card for any newly pushed session!
      const numMatch = dir.name.match(/\d+/);
      const numFormatted = numMatch ? numMatch[0].padStart(2, "0") : dir.name;
      const cleanTitle = dir.name.replace(/[-_]/g, " ");

      return {
        id: dir.name.toLowerCase().replace(/[\s_]+/g, "-"),
        sessionNum: `${numFormatted}`,
        title: `${cleanTitle} Module`,
        topic: "NLP Advanced Module",
        githubUrl: dir.html_url || `https://github.com/FidelCristopher/lab-nlp/tree/main/${encodeURIComponent(dir.name)}`,
        description: `Practical implementation and code experiments for ${dir.name}. Newly synchronized from repository FidelCristopher/lab-nlp.`,
        tags: ["NLP", "Python", "Jupyter Notebook", "Machine Learning", cleanTitle]
      };
    });

    // Sort sessions logically (Sesi 1, Sesi 2, Sesi 3, ..., Sesi 11)
    mergedSessions.sort((a, b) => {
      const numA = parseInt(a.sessionNum.replace(/\D/g, "") || "0", 10);
      const numB = parseInt(b.sessionNum.replace(/\D/g, "") || "0", 10);
      return numA - numB;
    });

    return NextResponse.json({
      source: "live",
      sessions: mergedSessions.length > 0 ? mergedSessions : Object.values(defaultSessions)
    });
  } catch (err) {
    return NextResponse.json({
      source: "error-fallback",
      sessions: Object.values(defaultSessions)
    });
  }
}
