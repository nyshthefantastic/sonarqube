/*
 * SonarQube
 * Copyright (C) 2009-2020 SonarSource SA
 * mailto:info AT sonarsource DOT com
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { BranchLike } from '../../../../types/branch-like';
import BranchLikeNavigation from './branch-like/BranchLikeNavigation';
import CurrentBranchLikeMergeInformation from './branch-like/CurrentBranchLikeMergeInformation';
import { ComponentBreadcrumb } from './ComponentBreadcrumb';

export interface ComponentNavHeaderProps {
  branchLikes: BranchLike[];
  component: T.Component;
  currentBranchLike: BranchLike | undefined;
}

export function ComponentNavHeader(props: ComponentNavHeaderProps) {
  const { branchLikes, component, currentBranchLike } = props;

  return (
    <>
      <Helmet title={component.name} />
      <header className="display-flex-center flex-shrink">
        <ComponentBreadcrumb component={component} currentBranchLike={currentBranchLike} />
        {currentBranchLike && (
          <>
            <BranchLikeNavigation
              branchLikes={branchLikes}
              component={component}
              currentBranchLike={currentBranchLike}
            />
            <CurrentBranchLikeMergeInformation currentBranchLike={currentBranchLike} />
          </>
        )}
      </header>
    </>
  );
}

export default React.memo(ComponentNavHeader);
