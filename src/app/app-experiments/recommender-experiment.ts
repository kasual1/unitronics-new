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
    var options = [0, 1, 5];
    params.set('recommenderType', new planout.Ops.Random.Sample(
      {
        choices: [
          0,
          1,
          5,
          options[Math.floor(Math.random()*options.length)]
        ],
        'unit': this.inputs.userId
      }));
  }

}