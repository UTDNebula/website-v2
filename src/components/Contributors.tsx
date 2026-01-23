import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Contributor {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  contributions: number;
}

interface ContributorsProps {
  repos: string | string[];
}

export default async function Contributors(props: ContributorsProps) {
  const normalizedRepos = Array.isArray(props.repos) ? props.repos : [props.repos];

  // Get all contributors from all repos
  const contributors: Contributor[] = Object.values(
    (
      await Promise.all(
        normalizedRepos.map((repo) =>
          fetch(`https://api.github.com/repos/UTDNebula/${repo}/contributors`).then((res) =>
            res.json(),
          ),
        ),
      )
    )
      .flat()
      // Combine duplicates
      .reduce((value, object) => {
        if (value[object.id]) {
          value[object.id].contributions += object.contributions;
        } else {
          value[object.id] = object;
        }
        return value;
      }, {}),
  );

  contributors.sort((a: Contributor, b: Contributor) => b.contributions - a.contributions);

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {contributors.map((contributor: Contributor) => (
        <Link
          key={contributor.id}
          href={contributor.html_url}
          target="_blank"
          className="rounded-full overflow-hidden transition-transform hover:scale-105"
        >
          <Image
            src={contributor.avatar_url}
            alt={`Contributor avatar of ${contributor.login}`}
            width={40}
            height={40}
            className="w-12 h-12"
            unoptimized
          />
        </Link>
      ))}
    </div>
  );
}
