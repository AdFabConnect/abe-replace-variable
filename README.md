# abe-replace-variable

## Usage

Add a reference in `abe-variable-references.json` file:
```json
{
    "$$firstname": "john doe"
}
```

Into input type text write `hello $$firstname`.

When the post is published `hello $$firstname` will be replaced by `john doe`.
