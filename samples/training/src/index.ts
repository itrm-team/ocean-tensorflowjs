import * as tf from '@tensorflow/tfjs-node';
import { MultiLayerPerceptronSpace, MultilayerPerceptronTraining, MultilevelSequentialTraining, MultilayerIOParser, SequentialSpace } from 'oceanai-js';
import { ModelGoal } from '../ModelGoal';

let inputs = [
    [ 0.1, 0.3, 0.4, 0.4 ],
    [ 0.8, 0.2, 0.2, 0.6 ],
    [ 0.2, 0.6, 0.4, 0.3 ],
    [ 0.3, 0.8, 0.7, 0.9 ],
    [ 0.1, 0.2, 0.3, 0.2 ],
    [ 0.4, 0.4, 0.9, 0.1 ],
    [ 0.1, 0.3, 0.2, 0.5 ],
    [ 0.5, 0.5, 0.3, 0.3 ],
    [ 0.7, 0.6, 0.2, 0.5 ],
];
let outputs = [
    [ 0.25, 0.4  ],
    [ 0.5,  0.4  ],
    [ 0.5,  0.35 ],
    [ 0.55, 0.8  ],
    [ 0.15, 0.25 ],
    [ 0.4,  0.5  ],
    [ 0.4,  0.35 ],
    [ 0.5,  0.3  ],
    [ 0.65, 0.35 ],
];

let args = {
    inputs: 4,
    outputs: 2,
    hidden: [20, 20]
};

let goal = new ModelGoal(inputs, outputs);

// tensorflow compiling args (class ModelCompileArgs in tensorflow)
let compileArgs = {
    optimizer: 'Adamax',
    loss: 'meanSquaredError',
    metrics: ['mse']
};

// tensorflow fit args (class ModelFitArgs in tensorflow)
let fitArgs = {
    epochs: 100,
    batchSize: 32
}

let iters = 10;

// create a new model using a specific training
async function sample1() {
    let training = new MultilayerPerceptronTraining(args, goal, compileArgs, fitArgs, iters);
    let model = await training.apply();
    console.log("> outputs:", outputs);
    console.log("> predictions:", await model.apply(inputs));
}

// create a new model specifing the model generation (extends Space or SequentialSpace for tensorflow) and Data parsing (extends DataParse)
async function sample2() {
    let parser = new MultilayerIOParser(2);
    let space = new MultiLayerPerceptronSpace({
        inputs: 4,
        outputs: 2,
        hidden: [20, 20]
    });
    let training = new MultilevelSequentialTraining(goal, parser, compileArgs, fitArgs, iters);
    let model = await training.apply(space);
    console.log("> outputs:", outputs);
    console.log("> predictions:", await model.apply(inputs));
}

// create a new model training using the tensorflow functions
async function sample3() {
    let parser = new MultilayerIOParser(2);
    let space = new MultiLayerPerceptronSpace({
        inputs: 4,
        outputs: 2,
        hidden: [20, 20]
    });
    let model = space.generate();
    model.model.compile(compileArgs);
    let data = parser.parseInputs(inputs);
    let labels = parser.parseOutputs(outputs);
    await model.model.fit(data, labels, fitArgs);
    let predictions = await model.apply(data);
    console.log("> outputs:", outputs);
    console.log("> predictions:", await parser.restoreOutputs(predictions));
}

// Personal network designed using tensorflow layer definitions
async function sample4() {
    // defining a personalized network in this case multilayer perceptron
    let layers = [
        tf.layers.dense({ units: args.inputs, inputShape: [ args.inputs ] }), // input layer
        tf.layers.dense({ units: 20 }), // hidden layer 1
        tf.layers.dense({ units: 20 }), // hidden layer 2
        tf.layers.dense({ units: args.outputs }) // output layer
    ];
    let space = new SequentialSpace(layers);
    let parser = new MultilayerIOParser(2);
    let training = new MultilevelSequentialTraining(goal, parser, compileArgs, fitArgs, iters);
    let model = await training.apply(space);
    console.log("> outputs:", outputs);
    console.log("> predictions:", await model.apply(inputs));
}

async function run() {
    await sample1();
    await sample2();
    await sample3();
    await sample4();
}

run();