# Running
Run the ```dlicense``` command in the directory of your application:

It will output something like:
```
No "dlicense.json" found
colors@1.1.2 MIT
dlicense@1.0.0 MIT
nlf@1.3.2 MIT
```
 
# Configuration
Add a ```dlicense.json``` to the directory of your application:
```javascript
{
  "licenses": ["MIT"]
}
```

After add the configuration another run should output something like:
```
All licenses are compatible
```

Possible configurations:
* nlf:
  * depth: The depth of the recursive check (default: 0)
  * directory: The directory which will be checked (default: process.cwd())
* licenses: The list of the allowed licenses (default: [])
* proprietaries: The list of the allowed proprietary packages (default: [])
* ignores: The list of the ignored packages which are checked manually (default: [])
