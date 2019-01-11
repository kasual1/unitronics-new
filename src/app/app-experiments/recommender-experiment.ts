import * as planout from "planout";

export class RecommenderExperiment extends (planout.Experiment as { new(): any; }) {

  constructor(
    inputs,
  ) {
    super();
    this.inputs = inputs;
  }

  configureLogger() {
    return;
  }

  log(event) {
    console.log(event);
  }

  previouslyLogged() {
  }

  setup() {
    this.setName('RecommenderExperiment');
  }

  getParamNames() {
    return this.getDefaultParamNames();
  }

  assign(params, args) {
    params.set('recommenderType', new planout.Ops.Random.Sample(
      {
        choices: [
          'colabFilter',
          'colabFilter',
          'colabFilter',
          'colabFilter'
        ],
        'unit': this.inputs.userId
      }));
  }

}