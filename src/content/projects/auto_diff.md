---
title: Automatic differentiation made EaZy
summary: What actually happens when you call .backward() in PyTorch?
number: "01"
year: "2026"
stack:
  - Python
  - Numpy
accent: orange
order: 1
status : in progress
repository: https://github.com/sabeaussan/EaZyGrad/tree/main
cover: backward.gif
# coverAlt: A useful description of the project image
---

##

"What I cannot create, I do not understand", Richard Feynman. I am starting this blog post with a Feynman quote, first and foremost to sound clever, but also because it summarizes well the purpose of EaZyGrad: understanding automatic differentiation at a fundamental level by rebuilding it. Not just a vague idea such as "it is related to the chain rule somehow", but a useful and reliable mental model of what PyTorch does under the hood when the almighty `.backward()` is invoked on a tensor.

EaZyGrad is a tiny automatic differentiation engine built from scratch. Starting from a few tensor operations, this project follows the entire journey from building a computation graph during the forward pass to propagating gradients backward through it.

Along the way, we demystify reverse-mode automatic differentiation, computation graphs, the chain rule, and the vector-Jacobian products that make backpropagation efficient, without hiding the interesting parts behind framework abstractions.

More importantly, this is meant to be hands-on. By the end, you’ll have a mental model you can turn into code: implement new tensor operations, derive their backward rules, experiment with operation fusion, and extend EaZyGrad yourself.

If you’ve ever wanted `.backward()` to feel less like magic, [let’s build it from the ground up](https://eazygrad.readthedocs.io/en/latest/auto_diff.html).