Docker presentation 

Intro

["It is embarrassing to think that a 30 ton shipment of coffee can safely travel half-way across the World in less time than it takes a software team to deliver its code from one datacenter to another sitting 10 miles away”] [1]

[1]: https://github.com/MatApple/docker/blob/master/docs/sources/concepts/introduction.rst

Infrastructure analogy where containers are infrastructure agnostic.


History

Modern Linux containers have been around since 2006, when Google first introduced the necessary ingredients for containerization in cgroups and namespaces. But it was really Docker’s work that simplified the creation of containers and made them what they are today: The best way for developers and sysadmins to standardize, configure, and ship applications.

An enabler of lightweight services/distributed applications

Can be used to de-couple your continuous integration from language/os/environment and can help to decouple your automated production pipeline from language/environment specifics.

Easily reproduce an entire stack all the way to the OS level
Immutability/reproducibility on any environment. 

Time/speed from the point of view of starting a Linux container, to the sharing a fully working API, to checking in code that passes all automated testing whence it reaches production 

Performance of container versus virtual machine

Some best practices and a deep explanation of why those practices are important 

How can you actually use docker in production and why it is so valuable

Immutability and isolation. 

At a simpler level, allows running easily multiple versions of frameworks, or local software dependencies. Just another example of Docker making things easier.

Docker compose

Core tenets at the heart of microservices 

How this aids in using the right tool for the right job.
Smaller, isolated, easy to deploy components. Hence, if your service

Why docker is important 
How is docker comprised, containers versus images, (a simple diagram to show the path of the talk)
What docker is capable of
How to use the basics
Demonstration
Production options
Compatibility with continuous deployment 

Docker is two years old

The ability to share services
producing useful tools that other developers can use to solve similar problems to the ones they are facing
encourages other developers to solve similar problems in similar ways yet leaves the door open to picking a different approach if required - philosophical summary of Batteries included but swappable

When combined with continuous deployment...

How to create docker images
How to store and share images using registries

Volumes are specially designated directories within one or more containers that bypass the layered Union File System to provide persistent or shared data for Docker.

You would never dream of replicating production on one box but with docker they are so lightweight that you can.

It is certainly possible to retrofit your build infrastructure to include Go development tools and dependencies. 



Batteries Included But Swappable

Boot2Docker is a lightweight Linux distribution made specifically to run Docker containers. It runs completely from RAM, is a small ~24MB download and boots in ~5s (YMMV). [ … ] Boot2Docker is currently designed and tuned for development

Write once, run anywhere

Perfect for distributed applications (why?)


Portable.  Application owners want an application stack that is independent of the underlying infrastructure so they’ll have the freedom to deploy on the infrastructure of their choosing – and then move or scale without friction as conditions change;
Composable.  Application owners want apps composed of multiple smaller services so they can keep teams small and fast-moving as well as assemble apps from trusted, secure components;
Dynamic.  Development-to-deployment cycles measured in months are no longer acceptable – application owners want cycle times measured in hours or even minutes.  Breaking down monolithic applications into multiple smaller services that can be updated independently reduces change management risk and compresses cycle time.
Scalable.  To simultaneously meet changes in demand while efficiently using infrastructure resources, application owners want to frictionlessly scale-up and -down across hosts, data centers, and even public clouds.

Breaking up my monolithic apps into microservices means there are many more components to keep track of and manage; what’s available in the Docker ecosystem to help with this
(Use a hosted Docker registry)

docker machine
docker save -o <save image to path> <image name>
