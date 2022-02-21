[![banner](https://media-exp1.licdn.com/dms/image/C561BAQFjPq3pi-mgZQ/company-background_10000/0/1540323628962?e=2159024400&v=beta&t=dELqmM_LCU2nVT1oJiLNqBY-xahFJ40mLOiIcOg5odw)](https://itrmachines.com)

<h1 align="center">Oceanai-js</h1>

> Wrapper library that allows a direct integration between the Ocean marketplace and artificial intelligence tools like tensorflow

With Oceanai-js, you can:

- **Create** artificial intelligence models: the current state of the library uses [Tensorflow.js](https://www.npmjs.com/package/@tensorflow/tfjs) for the implementation of the AI models, anything that you can do with [Tensorflow.js](https://www.npmjs.com/package/@tensorflow/tfjs)  you can also do it with **Oceanai-js** 

- **Buy** OCEAN marketplace datasets to use them on your models
- **Publish** OCEAN marketplace datasets
- **Consume** OCEAN datatokens, to access the services of the Ocean environment.

Every function related to the OCEAN environment is fullfiled using [Ocean.js](https://github.com/oceanprotocol/ocean.js).
Ocean.js is part of the [Ocean Protocol](https://oceanprotocol.com) toolset.

This library is still in alpha state and you can expect running into problems. If you run into them, please open up a [new issue](https://github.com/itrm-team/ocean-tensorflowjs/issues/new?assignees=&labels=bug&template=bug_report.md&title=).

- [📚 Prerequisites](#-prerequisites)
- [🏗 Installation](#-installation)
- [🏄 Quickstart](#-quickstart)
  - [Obtaining Ocean datasets](#obtaining-ocean-datasets)
  - [Consume services](#consume-services)
  -  [📖 Learn More](#learn-more)
- [🦑 Development](#-development)
- [⬆️ Releases](#️-releases)
- [🏛 License](#-license)

## 📚 Prerequisites

- node.js ([Install from here](https://nodejs.org/en/download/))
- Typescript ([Install from here](https://www.npmjs.com/package/typescript))
- Node types ([Install from here](https://docs.docker.com/engine/install/linux-postinstall/))


## 🏗 Installation

```bash
npm install oceanai-js
```

## 🏄 Quickstart
The source code of this example is also included on the folder samples/intro of the library

**index.ts**
This file explains how to implement several types of AI models for the selected Ocean dataset

```ts
import  *  as  tf  from  '@tensorflow/tfjs-node';
import { MultiLayerPerceptronSpace, MultilayerPerceptronTraining, MultilevelSequentialTraining, MultilayerIOParser, SequentialSpace } from  'oceanai-js';
import { ModelGoal } from  './ModelGoal';

let  inputs = [
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

let  outputs = [
	[ 0.25, 0.4 ],
	[ 0.5, 0.4 ],
	[ 0.5, 0.35 ],
	[ 0.55, 0.8 ],
	[ 0.15, 0.25 ],
	[ 0.4, 0.5 ],
	[ 0.4, 0.35 ],
	[ 0.5, 0.3 ],
	[ 0.65, 0.35 ],
];

  
//Arguments for the creation of the model
let  args = {
	inputs:  4,
	outputs:  2,
	hidden: [20, 20]
};
let  goal = new  ModelGoal(inputs, outputs);
  
// tensorflow compiling args (class ModelCompileArgs in tensorflow)
let  compileArgs = {
	optimizer:  'Adamax',
	loss:  'meanSquaredError',
	metrics: ['mse']
};

// tensorflow fit args (class ModelFitArgs in tensorflow)
let  fitArgs = {
	epochs:  100,
	batchSize:  32
}

let  iters = 10;

// create a new model using a specific training (multilayer perceptron)
async  function  sample1() {
	let  training = new  MultilayerPerceptronTraining(args, goal, compileArgs, fitArgs, iters);
	let  model = await  training.apply();
	console.log("> outputs:", outputs);
	console.log("> predictions:", await  model.apply(inputs));
}
  

// create a new model specifing the model generation (extends Space or SequentialSpace for tensorflow) and Data parsing (extends DataParse)

async  function  sample2() {

	let  parser = new  MultilayerIOParser(2);
	let  space = new  MultiLayerPerceptronSpace({
		inputs:  4,
		outputs:  2,
		hidden: [20, 20]
	});

	let  training = new  MultilevelSequentialTraining(goal, parser, compileArgs, fitArgs, iters);
	let  model = await  training.apply(space);
	console.log("> outputs:", outputs);
	console.log("> predictions:", await  model.apply(inputs));
}

  

// create a new model training using the tensorflow functions

async  function  sample3() {
	let  parser = new  MultilayerIOParser(2);
	let  space = new  MultiLayerPerceptronSpace({
		inputs:  4,
		outputs:  2,
		hidden: [20, 20]
	});

	let  model = space.generate();
	model.model.compile(compileArgs);

	let  data = parser.parseInputs(inputs);
	let  labels = parser.parseOutputs(outputs);

	await  model.model.fit(data, labels, fitArgs);

	let  predictions = await  model.apply(data);
	console.log("> outputs:", outputs);
	console.log("> predictions:", await  parser.restoreOutputs(predictions));
}

// this function defines what kind of sample do you want to run
async  function  run() {
	await sample1();
	//await sample2();
	//await sample3();
}

run();
```



### Obtaining Ocean datasets
In here we will explain how to obtain OCEAN datasets using oceanai-js.


### Consume services
In here we will explain how to consume OCEAN services using oceanai-js.



### 📖 Learn more

- [Ocean.js](https://github.com/oceanprotocol/ocean.js) - Library for accessing to the OCEAN services
- [Tensorflow.js](https://github.com/tensorflow/tfjs) - Tensorflow AI library.

If you have any difficulties with the quickstarts, or if you have further questions about how to use oceanai.js please reach out to us on [Github](https://github.com/itrm-team/ocean-tensorflowjs/issues).

This also applies If you notice any bugs or issues with the library, in that case please [open an issue on github](https://github.com/itrm-team/ocean-tensorflowjs/issues/new?assignees=&labels=bug&template=bug_report.md&title=).

## 🦑 Development

The project is authored with TypeScript and compiled with `tsc`.

To start compiler in watch mode:

```bash
npm install
npm start
```

## ⬆️ Releases

Coming soon.


## 🏛 License

```
Copyright ((C)) 2021 Intelligent Trading Machines

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```