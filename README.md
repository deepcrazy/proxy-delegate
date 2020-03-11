# ProxyDelegate
Following the steps to complete this exercise:
1. clone this project
1. update packages: ```npm ci```
2. run the test: ```npm test```
3. make sure only 1 test case fails, the one that set version
4. fix the failed test case by modifying the ProxyDelegate.sol contract, e.g. add a version state variable in ProxyDelegate.sol
5. add a new Proxy contract which will use .call() instead of .delegatecall()
6. write test cases for the new Proxy contract to test getMsgSender() and setVersion(). Do you notice any differences between .call() and .delegatecall()?
    * .Delegate call: If you are making delegate call from contract A to contract B, then delegate will consider storage and state variables of variables of contract B.
    * .Call(): If you are making call() from contract A to contract B  then it will behave normally as suppose to do. Which means that if .call() is made from contract A to Contract B, then it will consider storgage and state variables of contract B.
7. commit your changes to github and submit your github url
