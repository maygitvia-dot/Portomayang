export interface ProjectMetric {
  label: string;
  value: string;
  subtext?: string;
}

export interface ModelComparison {
  name: string;
  valAccuracy: number;
  macroF1: number;
  weightedF1: number;
  isMainModel?: boolean;
}

export interface PipelineStep {
  step: string;
  title: string;
  description: string;
  details?: string;
  iconName?: string;
}

export interface ProjectData {
  id: string;
  numericId: string;
  tagline: string;
  title: string;
  subtitle: string;
  fullTitle: string;
  category: string;
  period: string;
  role: string;
  stack: string[];
  summary: string;
  problem: {
    statement: string;
    challenges: string[];
    objectives: string[];
  };
  myContribution: string[];
  technicalProcess: {
    overview: string;
    steps: PipelineStep[];
  };
  implementation: {
    architecture: string;
    codeSnippet?: {
      filename: string;
      language: string;
      code: string;
    };
    workflowNodes?: {
      node: string;
      purpose: string;
      configuration: string;
    }[];
  };
  results: {
    summary: string;
    metrics: ProjectMetric[];
    comparisons?: ModelComparison[];
    validationNotice: string;
    honestLimitations: string[];
  };
  resources: {
    githubUrl?: string;
    demoNote?: string;
    artifacts: {
      title: string;
      type: 'code' | 'diagram' | 'data' | 'pdf' | 'doc';
      description: string;
      status: string;
    }[];
  };
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  division?: string;
  location: string;
  period: string;
  type: 'internship' | 'organization' | 'education';
  highlights: string[];
  technologies?: string[];
  note?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  orbitalAngle: number;
  color: string;
  skills: {
    name: string;
    context: string;
    category: string;
  }[];
}

