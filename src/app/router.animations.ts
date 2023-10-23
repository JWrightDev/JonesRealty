import {trigger, animate, style, group, animateChild, query, stagger, transition} from "@angular/animations";

export const routerTransition = trigger('routerTransition', [
  transition('* <=> *', [
    style({ position: 'relative'}),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ], { optional: true }),
    query(':enter', [
      style({ left: '-100%', opacity: 0 })
    ], { optional: true }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [
        animate('300ms ease-out', style({ left: '100%', opacity: 0 }))
      ], { optional: true }),
      query(':enter', [
        animate('1s ease-out', style({ left: '0%', opacity: 1})),
      ], { optional: true }),
      query('@*', animateChild(), { optional: true })
    ]),
  ])
]);




// export const routerTransition = trigger('routerTransition', [
//   transition('* <=> *',[
//     style({position: 'relative'}),
//     query(':enter, :leave', style({position: 'relative', top: 0, width: '100%'}),{optional: true}),
//     query(':enter .block, :enter .featured-title, :enter #card', style({opacity: '0'}), {optional: true}),
//     query(':leave', animateChild(), {optional: true}),
//     group([
//       query(':leave *', [
//         style({ transform: 'translateX(0%)' }),
//         animate('0.5s ease-in-out', style({ transform: 'translateX(-150%)' }))
//       ], { optional: true }),
//       query(':enter #banner,:enter #properties',[
//         style({transform: 'translateX(100%)'}),
//         animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
//       ], {optional: true}),
//     ]),
//     //Fade in and slide up
//     group([
//       query(':enter .featured-title, :enter .block, :enter .feature-modal, :enter #card',[
//         style({transform: 'translateX(100%)'}),
//         animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
//       ], {optional: true}),
//       query(':enter .featured-title, :enter .block, :enter .feature-modal, :enter #card', stagger(400, [
//         style({transform: 'translateY(100px)'}),
//         animate('1s ease-in-out', style({transform: 'translateY(0px)', opacity: 1})),
//       ]), {optional: true}),
//     ]),
//   ])
// ]);
