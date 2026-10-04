"use client";

import React, { useState, useMemo, useEffect } from "react";

interface SessionMeta {
  id: string;
  sessionNum: string;
  title: string;
  topic: string;
  githubUrl: string;
  description: string;
  tags: string[];
}

const defaultSessions: SessionMeta[] = [
  {
    id: "sesi-1",
    sessionNum: "01",
    title: "Text Tokenization & Stopwords Filtering",
    topic: "Text Preprocessing Foundations",
    githubUrl: "https://github.com/FidelCristopher/lab-nlp/tree/main/Sesi%201",
    description:
      "Fundamental natural language processing techniques: segmenting raw paragraph text into sentences (sent_tokenize) and words (word_tokenize), filtering punctuation characters, and removing domain-specific stop words using NLTK corpus.",
    tags: ["NLP", "Tokenization", "NLTK", "Stopwords", "Text Cleaning", "Python"]
  },
  {
    id: "sesi-2",
    sessionNum: "02",
    title: "Stemming & WordNet Lemmatization",
    topic: "Morphological Analysis",
    githubUrl: "https://github.com/FidelCristopher/lab-nlp/tree/main/Sesi%202",
    description:
      "Morphological text reduction comparing rule-based algorithmic stemmers (PorterStemmer, LancasterStemmer) against vocabulary-aware WordNetLemmatizer to normalize inflectional variants back to canonical base words.",
    tags: ["NLP", "Stemming", "Lemmatization", "WordNet", "Lancaster", "NLTK", "Python"]
  },
  {
    id: "sesi-3",
    sessionNum: "03",
    title: "POS Tagging, Frequency Distribution & NER",
    topic: "Syntactic & Semantic Tagging",
    githubUrl: "https://github.com/FidelCristopher/lab-nlp/tree/main/Sesi%203",
    description:
      "Grammatical part-of-speech classification (pos_tag), term frequency distribution analysis (FreqDist), chunking rules, and Named Entity Recognition (ne_chunk) to identify proper nouns and contextual syntactic patterns in documents.",
    tags: ["NLP", "POS Tagging", "NER", "FreqDist", "Chunking", "NLTK", "Syntax"]
  },
  {
    id: "sesi-4",
    sessionNum: "04",
    title: "End-to-End NLP Preprocessing & Emotion Classifier",
    topic: "Pipeline & Model Serialization",
    githubUrl: "https://github.com/FidelCristopher/lab-nlp/tree/main/Sesi%204",
    description:
      "Complete automated text pipeline: cleaning noisy comment datasets (emotion_comment.csv), tokenization, POS-informed lemmatization, feature extraction, and training a sentiment/emotion text classifier exported as model_classifier.pkl.",
    tags: ["NLP", "Text Classification", "Preprocessing Pipeline", "Emotion Analysis", "Scikit-Learn", "Pickle"]
  },
  {
    id: "sesi-8",
    sessionNum: "08",
    title: "Language Modeling with N-Grams & Cosine Similarity",
    topic: "Vectorization & Document Distance",
    githubUrl: "https://github.com/FidelCristopher/lab-nlp/tree/main/Sesi%208",
    description:
      "Unigram, Bigram, and Trigram language modeling using scikit-learn CountVectorizer. Transforming unstructured text into Bag-of-Words sparse matrices and computing document similarity metrics using Cosine Distance.",
    tags: ["NLP", "N-Gram", "CountVectorizer", "Cosine Similarity", "Vector Space", "Language Modeling"]
  },
  {
    id: "sesi-9",
    sessionNum: "09",
    title: "Dense Word Embeddings (Word2Vec & Pre-trained GloVe)",
    topic: "Vector Semantics & Word Math",
    githubUrl: "https://github.com/FidelCristopher/lab-nlp/tree/main/Sesi%209",
    description:
      "Continuous vector representations of words. Training custom Word2Vec architectures (Skip-Gram & CBOW) using Gensim and mapping semantic word vectors with Stanford's pre-trained GloVe (100d), evaluating semantic cosine similarity.",
    tags: ["NLP", "Word2Vec", "GloVe", "Word Embeddings", "Gensim", "Semantic Similarity", "Deep Learning"]
  },
  {
    id: "sesi-11",
    sessionNum: "11",
    title: "Real-World Job Posting Text Classifier (UAP Capstone)",
    topic: "Comprehensive ML Project",
    githubUrl: "https://github.com/FidelCristopher/lab-nlp/tree/main/Sesi%2011",
    description:
      "Real-world NLP classification on large job posting dataset (jobpostingdata.csv): multi-step cleaning, tokenization, lemmatization with POS tags, probabilistic Naive Bayes classification, and accuracy benchmarking for UAP exam criteria.",
    tags: ["NLP", "Text Classification", "Naive Bayes", "Feature Extraction", "Pandas", "UAP Exam"]
  }
];

export function AllLearningView() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sessions, setSessions] = useState<SessionMeta[]>(defaultSessions);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    let isMounted = true;
    async function syncRepo() {
      try {
        const res = await fetch("/api/learning");
        if (!res.ok) return;
        const data = await res.json();
        if (data.sessions && Array.isArray(data.sessions) && isMounted) {
          setSessions(data.sessions);
          if (data.source === "live") {
            setIsLive(true);
          }
        }
      } catch (err) {
        // silent fallback to default curated sessions
      }
    }
    syncRepo();
    return () => {
      isMounted = false;
    };
  }, []);

  // Filter based on searchQuery
  const filteredSessions = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return sessions;

    return sessions.filter((s) => {
      const titleMatch = s.title.toLowerCase().includes(q);
      const sessionMatch = s.sessionNum.toLowerCase().includes(q);
      const topicMatch = s.topic.toLowerCase().includes(q);
      const tagMatch = s.tags.some((t) => t.toLowerCase().includes(q));
      const descMatch = s.description.toLowerCase().includes(q);
      return titleMatch || sessionMatch || topicMatch || tagMatch || descMatch;
    });
  }, [searchQuery, sessions]);

  return (
    <div className="relative z-1 -mt-px border-x border-t border-line bg-card max-md:border-x-0">
      {/* Header Panel */}
      <header data-slot="panel-header" className="border-b border-line px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <h2 data-slot="panel-title" className="font-handwritten text-3xl font-semibold tracking-tight">
                Natural Language Processing Lab
              </h2>
              <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[11px] font-mono text-emerald-400 select-none">
                <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Auto-Synced
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-0.5">
              Live coursework &amp; notebook modules from{" "}
              <a
                href="https://github.com/FidelCristopher/lab-nlp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline hover:text-emerald-400 font-mono inline-flex items-center gap-1"
              >
                FidelCristopher/lab-nlp
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right">
                  <path d="M7 7h10v10"></path>
                  <path d="M7 17 17 7"></path>
                </svg>
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
          <span className="text-xs text-muted-foreground">Subject</span>
          <span className="font-mono text-base font-bold tracking-tight text-foreground">NLP &amp; Text Mining</span>
        </div>
        <div className="flex flex-col gap-1 bg-background p-4">
          <span className="text-xs text-muted-foreground">Completed Sessions</span>
          <span className="font-mono text-base font-bold tracking-tight text-emerald-400">{sessions.length} Core Modules</span>
        </div>
        <div className="flex flex-col gap-1 bg-background p-4">
          <span className="text-xs text-muted-foreground">Primary Libraries</span>
          <span className="font-mono text-base font-bold tracking-tight text-foreground">NLTK, Gensim, Sklearn</span>
        </div>
        <div className="flex flex-col gap-1 bg-background p-4">
          <span className="text-xs text-muted-foreground">Sync Status</span>
          <span className="font-mono text-base font-bold tracking-tight text-emerald-400">Up to Date</span>
        </div>
      </div>

      {/* Search Bar Section */}
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
            placeholder="Search session by topic, algorithm, or tag (e.g. Word2Vec, GloVe, POS Tagging, NLTK)..."
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

        {/* Quick Suggestion Pills */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2.5 text-xs text-muted-foreground">
          <span className="font-mono text-[11px] mr-1">Filter Tag:</span>
          {["NLP", "Tokenization", "Stemming", "POS Tagging", "Word2Vec", "GloVe", "N-Gram", "Classification"].map((suggest) => (
            <button
              key={suggest}
              type="button"
              onClick={() => setSearchQuery(suggest)}
              className={`rounded-md border px-2 py-0.5 font-mono text-[11px] transition-colors ${
                searchQuery.toLowerCase() === suggest.toLowerCase()
                  ? "border-emerald-500 bg-emerald-500/10 text-emerald-400"
                  : "border-border bg-background text-muted-foreground hover:border-foreground/30 hover:text-foreground"
              }`}
            >
              #{suggest}
            </button>
          ))}
        </div>
      </div>

      {/* 2-Column Session Cards Grid (Interactive GitHub Links) */}
      <div className="p-4 border-b border-line">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="font-handwritten text-2xl font-semibold tracking-tight text-foreground">
              Lab Sessions &amp; Notebooks
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              Click any card to inspect the corresponding Jupyter notebook and source code on GitHub.
            </p>
          </div>
          <span className="font-mono text-xs text-muted-foreground shrink-0">
            {filteredSessions.length} of {sessions.length} sessions
          </span>
        </div>

        {filteredSessions.length > 0 ? (
          <div className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 rounded-lg overflow-hidden">
            {filteredSessions.map((session) => (
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
                      <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-muted text-muted-foreground border border-border font-semibold">
                        {session.sessionNum.replace(/session\s*/i, "")}
                      </span>
                      <span className="text-[11px] font-mono text-emerald-400/90">
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
            ))}
          </div>
        ) : (
          <div className="flex min-h-[140px] flex-col items-center justify-center rounded-lg border border-dashed border-line bg-muted/20 p-6 text-center">
            <p className="font-handwritten text-2xl text-muted-foreground">
              No sessions found matching &quot;{searchQuery}&quot;
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Try searching for &quot;Word2Vec&quot;, &quot;GloVe&quot;, &quot;POS Tagging&quot;, or &quot;Tokenization&quot;.
            </p>
            <button
              type="button"
              onClick={() => setSearchQuery("")}
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
