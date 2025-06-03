---
sidebar_position: 1
---

# System Requirements

Graph Explorer works with many different graph databases.  Support may be limited based on the query languages supported and the client libraries used for each supported query language.

## Known Working Graph Databases

### Amazon Neptune Database

Version: > [1.2.1.0](https://docs.aws.amazon.com/neptune/latest/userguide/engine-releases-1.2.1.0.html) (released March 8th, 2023)
Primary requirements:
- Support for Gremlin, SPARQL, and openCypher query languages
- Support for the [Summary API] (https://docs.aws.amazon.com/neptune/latest/userguide/neptune-graph-summary.html)
    - The Summary API is not supported on the burstable instances (`db.t3.medium` or `db.t4g.medium`).  Graph Explorer will fall back to using queries to determine graph schema.  This may not be performant on larger graphs and it is suggested to use a non-burstable instance if using a larger graph.
- Support for [Apache TinkerPop 3.6.2](https://tinkerpop.apache.org/docs/3.6.2/reference/) or later.

### Amazon Neptune Analytics

- openCypher query language support only.

### Gremlin Server

- Gremlin support only.

#### Requires REST/HTTP Channelzier (no support for websockets)
- Graph Explorer only supports HTTP(S) connections. When connecting to Gremlin-Server, ensure it is configured with a channelizer that supports HTTP(S) (i.e. Channelizer Documentation).

:::info[Tip]
The Gremlin Server configuration can be usually found at:
```
/conf/gremlin-server.yaml
```
:::

#### Using Gremlin Server Prior to version 3.7.x

If you have a version of Gremlin Server prior to 3.7, you will need to make the following changes:
- **Enable property returns** - Remove `.withStrategies(ReferenceElementStrategy)` from /scripts/generate-modern.groovy so that properties are returned.
- **Enable string IDs** - Change `gremlin.tinkergraph.vertexIdManager` and `gremlin.tinkergraph.edgeIdManager` in `/conf/tinkergraph-empty.properties` to support string ids. You can use `ANY`.
- Build and run the Docker container as normal.


### Blazegraph

Version: 2.1.5
Primary requirements:
- SPARQL language support only.

## Others

If you are using Graph Explorer with a graph database not listed here, we would love to hear your feedback!  Please file an issue or start a conversation in the GitHub repo with details of your deployment.