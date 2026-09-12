export type ThemeId = 'astra_primary' | 'astra_alt' | 'astra_minimal';

export interface ColorPalette {
  primary: string;
  secondary: string;
  accent: string;
  danger: string;
  success: string;
  warning: string;
}

export interface UITheme {
  id: ThemeId;
  name: string;
  description: string;
  tagline: string;
  badge: string;
  palette: ColorPalette;
  dark: boolean;
}

export const AVAILABLE_THEMES: UITheme[] = [
  {
    id: 'astra_primary',
    name: 'Astra Cyan',
    description: 'Primary AGIS Astra clinical consensus pipeline with cyan-blue deep learning accents.',
    tagline: 'Gemini 3.8-Flash + Ollama Dual Inference',
    badge: 'PRIMARY',
    palette: {
      primary: '#06B6D4',
      secondary: '#0EA5E9',
      accent: '#8B5CF6',
      danger: '#EF4444',
      success: '#10B981',
      warning: '#F59E0B',
    },
    dark: true,
  },
  {
    id: 'astra_alt',
    name: 'Astra Violet',
    description: 'Alternative Astra engine emphasizing multimodal reasoning with violet spectrum.',
    tagline: 'Project Astra Deep Learning',
    badge: 'ALT',
    palette: {
      primary: '#8B5CF6',
      secondary: '#A78BFA',
      accent: '#06B6D4',
      danger: '#EF4444',
      success: '#10B981',
      warning: '#F59E0B',
    },
    dark: true,
  },
  {
    id: 'astra_minimal',
    name: 'Astra Minimal',
    description: 'Minimalist clinical workspace with soft grays for extended reading sessions.',
    tagline: 'Focus Mode',
    badge: 'LITE',
    palette: {
      primary: '#64748B',
      secondary: '#94A3B8',
      accent: '#0EA5E9',
      danger: '#DC2626',
      success: '#059669',
      warning: '#D97706',
    },
    dark: true,
  },
];
