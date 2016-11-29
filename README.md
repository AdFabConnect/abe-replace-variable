# abe-replace-variable

Edit:

Edit references: `abe-variable-references.json`

add a reference: 

```json
{
	"$$firstname": "john doe"
}
```

Example:

into input type text write `hello $$firstname`

# Publish

when the post is published `hello $$firstname` will be replaced by `john doe`
