System.register(['./app-ng1.module.js', './config.js', './root.js', './shared/directives.js', './shared/model.js', './shared/services.js', './7MinWorkout/services.js', './7MinWorkout/directives.js', './7MinWorkout/filters.js', './7MinWorkout/workout.js', './7MinWorkout/workoutvideos.js', './WorkoutBuilder/services.js', './WorkoutBuilder/directives.js', './WorkoutBuilder/exercise.js', './WorkoutBuilder/workout.js', './WorkoutBuilder/exercise-nav-component', './upgrade-adapter'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var exercise_nav_component_1, upgrade_adapter_1;
    return {
        setters:[
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (_5) {},
            function (_6) {},
            function (_7) {},
            function (_8) {},
            function (_9) {},
            function (_10) {},
            function (_11) {},
            function (_12) {},
            function (_13) {},
            function (_14) {},
            function (_15) {},
            function (exercise_nav_component_1_1) {
                exercise_nav_component_1 = exercise_nav_component_1_1;
            },
            function (upgrade_adapter_1_1) {
                upgrade_adapter_1 = upgrade_adapter_1_1;
            }],
        execute: function() {
            angular.module('WorkoutBuilder').directive('exerciseNav', upgrade_adapter_1.upgradeAdapter.downgradeNg2Component(exercise_nav_component_1.ExercisesNavComponent));
            upgrade_adapter_1.upgradeAdapter.upgradeNg1Provider('ExercisePlan');
            upgrade_adapter_1.upgradeAdapter.upgradeNg1Provider('WorkoutPlan');
            upgrade_adapter_1.upgradeAdapter.upgradeNg1Provider('WorkoutService');
            upgrade_adapter_1.upgradeAdapter.upgradeNg1Provider('WorkoutBuilderService');
            upgrade_adapter_1.upgradeAdapter.upgradeNg1Provider('ExerciseBuilderService');
            upgrade_adapter_1.upgradeAdapter.upgradeNg1Provider('ApiKeyAppenderInterceptor');
            upgrade_adapter_1.upgradeAdapter.upgradeNg1Provider('appEvents');
            upgrade_adapter_1.upgradeAdapter.upgradeNg1Provider('workoutHistoryTracker');
            angular.element(document).ready(function () {
                upgrade_adapter_1.upgradeAdapter.bootstrap(document.body, ['app'], { strictDi: true });
            });
        }
    }
});
//# sourceMappingURL=app.js.map