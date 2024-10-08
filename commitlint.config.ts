import { type UserConfig } from '@commitlint/types';
/**
 * build: changes that affect the build system or external dependencies
 * ci: changes to CI configuration files and script
 * docs: documentation only changes
 * feat: a new feature
 * fix: a bug fix
 * perf: a code change that improves performance
 * refactor: a code change that neither fixes a bug nor adds a feature
 * revert: revert to a commit
 * style: changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
 * test: adding missing tests or correcting existing tests
 * chore: updating grunt tasks etc; no production code change
 */

const config: UserConfig = {
  extends: ['@commitlint/config-conventional'],
};

export default config;
