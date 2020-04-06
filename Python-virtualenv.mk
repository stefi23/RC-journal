
# Python and  virtualenv

Today I've learned that with Python you have to use virtual environments as it's not as simple as with NodeJS where you just write `npm install --save <package>` and it will install it in the `node_modules/` directory in your project folder.

NodeJS does things by allowing you to either install things globally, or locally with their package manager.

In Node, npm makes managing your app dependencies easy. All you have to do is specify the versions you want in your package.json and it’s easy to see at a glance what dependencies a project has. [>Source and more info](https://medium.com/@charliesharding/python-virtual-env-vs-node-npm-76bda5f339ad)

-----
**Extra info:**
What if you have two different projects on your machine that require two different versions of the same package with python? Normally in languages such as NodeJS or PHP this is not a problem you just write `npm install --save <package>` and it will install it in the `node_modules/` directory in your project folder, but can the same thing be done with Python?

Virtualenv solved a very important problem with Python, it allowed developers to isolate their python dependencies on a project basis, and prevent the dependencies from leaking between projects. It's a core tool in python development and every programmer or software engineer that touch python code should be aware of how to use it and how it works under the hood.

`virtualenv` ( `pip install virtualenv` ) is a tool that allow you to create a new python interpreter that is specific for your own project. This means that when `pip` install any dependency it will do so only for the project specific interpreter, not for the system wide on that is shared on the whole machine.

[>Source](https://coderbook.com/@marcus/should-i-use-virtualenv-or-docker-containers-with-python/)

-----

 - A Virtual  Environment, put simply,  is an isolated working copy of Python which allows you to work on a specific project without worry of affecting other projects.
- It enables multiple side-by-side installations of  Python, one for
   each project.   
 - It doesn’t actually install separate copies of 
   Python, but it does provide a clever way to keep different project environments isolated.

[Source and info on how to setup and use virtualenv](https://www.pythonforbeginners.com/basics/how-to-use-python-virtualenv)

-----