import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course.component';
import {TimetableComponent} from './timetable/timetable.component';
import {CourseSearchComponent} from './course-search/course-search.component';
import {CourseUserComponent} from './user/course-user.component';
import {WishListComponent} from './wish-list/wish-list.component';
const routes: Routes = [
  {
      path: '',
      component: CourseComponent,
      children: [
        {
          path: 'timetable',
          component: TimetableComponent,
        },
        {
          path: 'search',
          component: CourseSearchComponent,
        },
        {
          path: 'user',
          component: CourseUserComponent
        },
        {
          path: 'wish-list',
          component: WishListComponent
        }
      ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class CourseRoutingModule {}
