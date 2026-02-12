import Cover from '@/../public/projects/notebook/cover.png';
import search from '@/../public/projects/notebook/icons8-search-100.png';
import upload from '@/../public/projects/notebook/icons8-upload-100.png';
import bookmark from '@/../public/projects/notebook/icons8-bookmark-100.png';
import Project from '@/components/Project';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Notebook',
  description:
    'Discover and share course notes: The easiest way to exchange knowledge with your classmates.',
  alternates: {
    canonical: '/projects/notebook',
  },
};

const features = [
  {
    title: 'Browse notes',
    description:
      'Miss class? Curious about how your classmates are taking notes? Filter by course and section to find relevant notes.',
    img: {
      src: search,
      alt: 'magnifying glass',
    },
  },
  {
    title: 'Share your notes',
    description:
      'Help out your fellow students and give back to the community by posting your own notes for others to learn from.',
    img: {
      src: upload,
      alt: 'share',
    },
  },
  {
    title: 'Save notes',
    description:
      'Really like another student\'s notes? Save your favorite notes to look back on whenever you need them.',
    img: {
      src: bookmark,
      alt: 'bookmark',
    },
  }
];

export default function Notebook() {
    return (
        <Project
            name="NOTEBOOK"
            tagline={
                <>
                    Discover and share
                    <br />
                    course notes
                </>
            }
            description={
                <>
                    The easiest way to exchange knowledge with your classmates.
                    <span className="block mt-2 font-display text-lg">* In development</span>
                </>
            }
            cover={{
                src: Cover,
                alt: 'Notebook screenshot',
            }}
            projectLink="https://notebook.utdnebula.com/"
            featuresDescription="Browse and save your classmates' notes to study later, and give back to your campus community by sharing your notes."
            features={features}
            learnMoreLink="https://github.com/UTDNebula/utd-notebook"
            repos="utd-notebook"
        />
    );
}
