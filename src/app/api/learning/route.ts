import { NextResponse } from "next/server";

export interface SessionMeta {
  id: string;
  category: "nlp" | "compbio";
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

async function fetchRepoSessions(
  repoName: string,
  category: "nlp" | "compbio",
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
      (item) => item.type === "dir" && (item.name.toLowerCase().includes("sesi") || item.name.toLowerCase().includes("session"))
    );

    const sessions: SessionMeta[] = dirItems.map((dir) => {
      if (curatedMap[dir.name]) {
        return curatedMap[dir.name];
      }

      const numMatch = dir.name.match(/\d+/);
      const numFormatted = numMatch ? numMatch[0].padStart(2, "0") : dir.name;
      const cleanTitle = dir.name.replace(/[-_]/g, " ");

      return {
        id: `${category}-${dir.name.toLowerCase().replace(/[\s_]+/g, "-")}`,
        category,
        sessionNum: `${numFormatted}`,
        title: `${cleanTitle} Module`,
        topic: category === "nlp" ? "NLP Advanced Module" : "Computational Biology Module",
        githubUrl: dir.html_url || `https://github.com/FidelCristopher/${repoName}/tree/main/${encodeURIComponent(dir.name)}`,
        description: `Practical implementation and source code experiments for ${dir.name}. Automatically synchronized from repository FidelCristopher/${repoName}.`,
        tags: [category === "nlp" ? "NLP" : "CompBio", "Python", "Bioinformatics", cleanTitle]
      };
    });

    sessions.sort((a, b) => {
      const numA = parseInt(a.sessionNum.replace(/\D/g, "") || "0", 10);
      const numB = parseInt(b.sessionNum.replace(/\D/g, "") || "0", 10);
      return numA - numB;
    });

    return sessions.length > 0 ? sessions : Object.values(curatedMap);
  } catch (err) {
    return Object.values(curatedMap);
  }
}

export async function GET() {
  const [nlpSessions, compBioSessions] = await Promise.all([
    fetchRepoSessions("lab-nlp", "nlp", defaultNlpSessions),
    fetchRepoSessions("lab-compbio", "compbio", defaultCompBioSessions)
  ]);

  return NextResponse.json({
    source: "live",
    nlpSessions,
    compBioSessions,
    allSessions: [...nlpSessions, ...compBioSessions]
  });
}
