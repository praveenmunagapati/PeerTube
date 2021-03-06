import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { MetaGuard } from '@ngx-meta/core'

import { AdminComponent } from './admin.component'
import { FriendsRoutes } from './friends'
import { RequestSchedulersRoutes } from './request-schedulers'
import { UsersRoutes } from './users'
import { VideoAbusesRoutes } from './video-abuses'
import { VideoBlacklistRoutes } from './video-blacklist'

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [ MetaGuard ],
    canActivateChild: [ MetaGuard ],
    children: [
      {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full'
      },
      ...FriendsRoutes,
      ...RequestSchedulersRoutes,
      ...UsersRoutes,
      ...VideoAbusesRoutes,
      ...VideoBlacklistRoutes
    ]
  }
]

@NgModule({
  imports: [ RouterModule.forChild(adminRoutes) ],
  exports: [ RouterModule ]
})
export class AdminRoutingModule {}
