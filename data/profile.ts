export interface TimelineEvent {
  date: string;
  type: 'work' | 'education' | 'project' | 'achievement' | 'other';
  title: string;
  description: string;
  tags?: string[];
  era?: string;
}

export interface TimelineEra {
  id: string;
  name: string;
  startDate: string;
  endDate?: string;
  description?: string;
  events: TimelineEvent[];
}

export interface ProfileData {
  name: string;
  title: string;
  bio: string;
  avatar?: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
  skills: string[];
  timeline: TimelineEvent[];
  eras: TimelineEra[];
}

export const profileData: ProfileData = {
  name: "黒羽 晟",
  title: "フルスタックエンジニア",
  bio: "技術への情熱と創造性を武器に、ユーザー体験を向上させるソリューションを提供しています。フロントエンドからバックエンドまで幅広い技術スタックを持ち、常に新しい技術の学習と実践を心がけています。",
  avatar: "/selfie.jpg",
  social: {
    github: "https://github.com/kurohane",
    linkedin: "https://linkedin.com/in/kurohane",
    email: "kurohane@example.com"
  },
  skills: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Go",
    "PostgreSQL",
    "AWS",
    "GCP",
    "Docker",
    "Kubernetes"
  ],
  timeline: [
    {
      date: "2024-01-15",
      type: "work",
      title: "シニアフルスタックエンジニア",
      description: "現在のポジション。大規模なWebアプリケーションの設計・開発を担当。チームリーダーとして後輩エンジニアのメンタリングも行う。",
      tags: ["React", "Node.js", "AWS", "チームリーダーシップ"],
      era: "current-company"
    },
    {
      date: "2023-06-01",
      type: "achievement",
      title: "AWS認定ソリューションアーキテクト取得",
      description: "クラウドアーキテクチャの設計と実装に関する専門知識を証明。",
      tags: ["AWS", "クラウドアーキテクチャ", "認定資格"],
      era: "current-company"
    },
    {
      date: "2022-09-01",
      type: "work",
      title: "フルスタックエンジニア",
      description: "スタートアップ企業でフルスタック開発を担当。React/Next.jsを使用したフロントエンド開発とNode.js/Pythonを使用したバックエンド開発を並行して行う。",
      tags: ["React", "Next.js", "Node.js", "Python", "PostgreSQL"],
      era: "startup-era"
    },
    {
      date: "2022-03-15",
      type: "project",
      title: "個人プロジェクト: タスク管理アプリ",
      description: "React + TypeScript + Firebaseを使用したリアルタイムタスク管理アプリケーションを開発。オープンソースとして公開。",
      tags: ["React", "TypeScript", "Firebase", "オープンソース"],
      era: "startup-era"
    },
    {
      date: "2021-04-01",
      type: "work",
      title: "フロントエンドエンジニア",
      description: "Web制作会社でフロントエンド開発を担当。Vue.jsとReactを使用したSPA開発、レスポンシブデザインの実装を主に行う。",
      tags: ["Vue.js", "React", "CSS", "レスポンシブデザイン"],
      era: "web-agency-era"
    },
    {
      date: "2020-08",
      type: "education",
      title: "プログラミングブートキャンプ修了",
      description: "6ヶ月間の集中プログラミング学習。HTML/CSS/JavaScriptの基礎からReact、Node.jsまで幅広く学習。",
      tags: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
      era: "learning-era"
    },
    {
      date: "2020-01",
      type: "other",
      title: "エンジニアへの転職を決意",
      description: "従来の職種からエンジニアへの転職を決意。独学でプログラミング学習を開始。",
      era: "learning-era"
    }
  ],
  eras: [
    {
      id: "current-company",
      name: "株式会社テックリード時代",
      startDate: "2022-09",
      description: "現在の会社でシニアエンジニアとして活躍中",
      events: []
    },
    {
      id: "startup-era",
      name: "スタートアップ時代",
      startDate: "2021-04",
      endDate: "2022-08",
      description: "スタートアップ企業でフルスタック開発を経験",
      events: []
    },
    {
      id: "web-agency-era",
      name: "Web制作会社時代",
      startDate: "2021-04",
      endDate: "2022-08",
      description: "Web制作会社でフロントエンド開発を担当",
      events: []
    },
    {
      id: "learning-era",
      name: "学習・転職準備時代",
      startDate: "2020-01",
      endDate: "2021-03",
      description: "プログラミング学習とエンジニア転職への準備期間",
      events: []
    }
  ]
};
