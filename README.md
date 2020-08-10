
This is a basic login page implemented using NodeJS.
This will do the basic authentication.
Version 1.0

The app has been updated. It runs on a docker container.
Do the following steps to run the app:

1. `docker build .`
2. `docker run -p <some_available_local_port>:3000 <image_name/id>`

You will be able to open the app `https://localhost:<same_available_local_port>`



To run the same in a local Kubernetes cluster:

Requirements:

Have minikube istalled
Have a VM installed
Instructions to run:

Pull the image from Docker Hub `docker pull venkat19967/login` or clone this repo and run `docker build .`
Navigate to cloned folder
Run `npm install`
Run `minikube start` wait till the cluster is up and running
Run `node main.js`
Get the service URL by running:  `minikube service --url login`
Copy paste the URL in the browser to access the webapp




For any doubts contact via mail: [venkatss10@gmail.com](Link URL)
