Docker/Microservices

"key advantage of the microservices architecture is that a service can be individually scaled based on its resource requirements"

"containers are portable across different types of infrastructure — they can run in AWS just as easily as they can on bare-metal servers — containers make deployment of code extremely convenient."

"Like water, humans tend to take the path of least resistance, and this means that each engineering group will try to embed as much logic into the portion of the application they control. This is a formula that guarantees unmaintainable code over time."

http://blog.zenika.com/index.php?post/2014/10/07/Setting-up-a-development-environment-using-Docker-and-Vagrant

http://www.centurylinklabs.com/interviews/what-is-rocket-and-how-its-different-than-docker/

Containers can be run anywhere, so the workflow or even steps of the workflow could be executed on any compute resource
Containers are great for logical units of work, and that isolation lends itself well to the micro-service design pattern
Computing resources are only consumed when the workflow is executing, thus compute resources are only needed at execution time.
Modularity of the workflow allows each unit of work or steps in the workflow to be easily changed/extended/re-composed (decoupled architecture)
http://www.centurylinklabs.com/ephemeral-containers-in-a-microservices-workflow/
https://github.com/mesosphere/marathon

Cloudformation templates for mesos cluster
https://github.com/mbabineau/cloudformation-mesos

https://github.com/thefactory/autoscale-python