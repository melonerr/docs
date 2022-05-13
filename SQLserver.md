# SQL server

    Go to SQL command

```console
1>sqlcmd -S .\sqlexpress
```

    Get Version

```console
1>select @@version
2>go
```

    Get date

```console
1>select getdate()
2>go
```

    Create Database

```console
1>create database learnnode
2>go
```

    Select Database

```console
1>use learnnode
2>go
3>Changed database context to 'learnnode'.
```

    Create Table

```console
1> create table t1 (id int, name nvarchar(25), role int)
2> go
```

    Insert Data

```console
1> insert into t1 values (1, 'Jira', 1),(2, 'Song', 2)
2> go
```
