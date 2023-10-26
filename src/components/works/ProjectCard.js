import React from 'react';
import PropTypes from 'prop-types';
import Iconify from '../Iconify';
import Image from 'next/image';

// ----------------------------------------------------------------------

export default function ProjectCard({ imgSrc, title, description, repoLink, sourceLink, techIcons }) {
  return (
    <div className="relative flex max-w-xs flex-col rounded-lg border border-gray-200 shadow-md dark:border-gray-700 dark:bg-neutral-800/70">
      {/* <img className="h-[150px] w-full rounded-t-lg object-cover" src={imgSrc} alt={title} /> */}
      <Image
        className="h-[150px] w-full rounded-t-lg object-cover"
        src={imgSrc}
        alt={title}
        width={0}
        height={0}
        sizes="100vw"
        placeholder="blur"
        blurDataURL={"data:image/jpeg;base64,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"}
      />
      <div className="p-5">
        <h1 className="mb-2 text-lg font-semibold  text-gray-900 dark:text-white">{title}</h1>
        <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">{description}</p>

        {techIcons && techIcons.length > 0 && (
          <div className="mt-5 mb-7 flex flex-wrap gap-5">
            {techIcons.map(({ icon }, i) => (
              <Iconify key={`icon-${i}`} classes="text-2xl opacity-80" icon={icon} />
            ))}
          </div>
        )}
      </div>
      {(sourceLink !== '' || repoLink !== '') && (
        <div className="absolute bottom-3 right-5 flex items-center space-x-5">
          {repoLink !== '' && (
            <a
              href={repoLink}
              target="_blank"
              rel="noreferrer"
              className="transform transition-all duration-200 hover:scale-110 hover:text-primary-600 dark:hover:text-primary-300"
            >
              <Iconify classes="text-2xl" icon="akar-icons:github-fill" />
            </a>
          )}
          {sourceLink !== '' && (
            <a
              href={sourceLink}
              target="_blank"
              rel="noreferrer"
              className="transform transition-all duration-200 hover:scale-110 hover:text-primary-600 dark:hover:text-primary-300"
            >
              <Iconify classes="text-2xl" icon="iconoir:open-new-window" />
            </a>
          )}
        </div>
      )}
    </div>
  );
}

// ----------------------------------------------------------------------

ProjectCard.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  repoLink: PropTypes.string,
  sourceLink: PropTypes.string,
  techIcons: PropTypes.array,
};
