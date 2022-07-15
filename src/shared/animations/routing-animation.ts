// @ts-ignore
import {animate, state, style, transition, trigger} from "@angular/animations";

export const RoutingAnimation = trigger('routingAnimation', [
  state('*', style({opacity: 1})),

  // transition(':enter', [
  //   style({opacity: 0.75}),
  //   animate('300ms 200ms ease-out',
  //     style({opacity: 1})),
  // ]),
  //
  // transition(':leave', [
  //   style({
  //     display: 'block',
  //     position: 'absolute',
  //     top: 0,
  //     left: 0,
  //     right: 0,
  //     zIndex: 1000,
  //   }),
  //   animate('150ms ease-out',
  //     style({opacity: 0.5})),
  // ]),
]);
