#!/bin/bash

# read contents of version.txt
export VERSION=$(cat version.txt)

# Increment version number
export RELEASE_VERSION=$(node -pe "require('semver').inc('${VERSION}', 'patch').trim()")

# Get new version number from package.json
export BRANCH_NAME=Version-${RELEASE_VERSION}

echo "Version: ${RELEASE_VERSION}"
echo "branch name: ${BRANCH_NAME}"

# Delete local branch in case of duplicate. Ignore any errors
git branch -D ${BRANCH_NAME} &>/dev/null

# Delete Remote branch in case of duplicate. Ignore any errors
git push origin --delete ${BRANCH_NAME} &>/dev/null

# Create new branch and check it out
git checkout -b ${BRANCH_NAME}

# Update version.txt
echo ${RELEASE_VERSION} > version.txt

# Stage only version file, commit and push to remote
git add version.txt
git commit -m "chore: update to version ${RELEASE_VERSION}"
git push -u origin ${BRANCH_NAME}
echo -e "\n\n\n🚂 Ready for departure 🚂 "

export TEMPLATE="release_pull_request_template.md"
export LABEL="release"
export TARGET_BRANCH="release"

# Assign to some engineers
export ASSIGNEES="HumbertoL,breeyae-hogue,sunilprasanna"

# Open Github straight to Create Pull request page. Compare against release
export URL="https://github.com/callemall/cea-framework/compare/${TARGET_BRANCH}...${BRANCH_NAME}?template=${TEMPLATE}&labels=${LABEL}&assignees=${ASSIGNEES}&quick_pull=1"

echo "Opening Pull Request on Github..."

# Linux and MacOS
open "${URL}" &>/dev/null

# Windows
start "" "${URL}"  &>/dev/null

exit 0