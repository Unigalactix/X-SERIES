import React from 'react';

export interface IDimension {
  name: string;
  description: string;
}

export interface ISword {
  name: string;
  description: string;
  color: string;
  wielder: string;
  icon: React.FC<any>;
}

export interface ICharacter {
  name: string;
  role: string;
  description: string;
}

export interface IBook {
  id: string;
  name: string;
  subtitle: string;
  imageUrl: string;
  chapters: string[];
}