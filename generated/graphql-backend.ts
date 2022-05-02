import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: any;
  /**
   * A point in time as described by the [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone.
   */
  Datetime: any;
  /** A JavaScript object encoded in the JSON format as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type ActivityStream = Node & {
  __typename?: 'ActivityStream';
  activityName?: Maybe<Scalars['String']>;
  activityType?: Maybe<Scalars['String']>;
  createdAt: Scalars['Datetime'];
  id: Scalars['Int'];
  metadata?: Maybe<Scalars['JSON']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};

/**
 * A condition to be used against `ActivityStream` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type ActivityStreamCondition = {
  /** Checks for equality with the object’s `activityName` field. */
  activityName?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `activityType` field. */
  activityType?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `metadata` field. */
  metadata?: InputMaybe<Scalars['JSON']>;
};

/** An input for mutations affecting `ActivityStream` */
export type ActivityStreamInput = {
  activityName?: InputMaybe<Scalars['String']>;
  activityType?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['Int']>;
  metadata?: InputMaybe<Scalars['JSON']>;
};

/** Represents an update to a `ActivityStream`. Fields that are set will be updated. */
export type ActivityStreamPatch = {
  activityName?: InputMaybe<Scalars['String']>;
  activityType?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['Int']>;
  metadata?: InputMaybe<Scalars['JSON']>;
};

/** A connection to a list of `ActivityStream` values. */
export type ActivityStreamsConnection = {
  __typename?: 'ActivityStreamsConnection';
  /** A list of edges which contains the `ActivityStream` and cursor to aid in pagination. */
  edges: Array<ActivityStreamsEdge>;
  /** A list of `ActivityStream` objects. */
  nodes: Array<Maybe<ActivityStream>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `ActivityStream` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `ActivityStream` edge in the connection. */
export type ActivityStreamsEdge = {
  __typename?: 'ActivityStreamsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `ActivityStream` at the end of the edge. */
  node?: Maybe<ActivityStream>;
};

/** Methods to use when ordering `ActivityStream`. */
export enum ActivityStreamsOrderBy {
  ActivityNameAsc = 'ACTIVITY_NAME_ASC',
  ActivityNameDesc = 'ACTIVITY_NAME_DESC',
  ActivityTypeAsc = 'ACTIVITY_TYPE_ASC',
  ActivityTypeDesc = 'ACTIVITY_TYPE_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  MetadataAsc = 'METADATA_ASC',
  MetadataDesc = 'METADATA_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type ApiResponse = {
  __typename?: 'ApiResponse';
  code?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type Category = {
  __typename?: 'Category';
  id?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
};

/** All input for the create `ActivityStream` mutation. */
export type CreateActivityStreamInput = {
  /** The `ActivityStream` to be created by this mutation. */
  activityStream: ActivityStreamInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** The output of our create `ActivityStream` mutation. */
export type CreateActivityStreamPayload = {
  __typename?: 'CreateActivityStreamPayload';
  /** The `ActivityStream` that was created by this mutation. */
  activityStream?: Maybe<ActivityStream>;
  /** An edge for our `ActivityStream`. May be used by Relay 1. */
  activityStreamEdge?: Maybe<ActivityStreamsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `ActivityStream` mutation. */
export type CreateActivityStreamPayloadActivityStreamEdgeArgs = {
  orderBy?: InputMaybe<Array<ActivityStreamsOrderBy>>;
};

/** All input for the create `KnowledgeBaseArticleDelayedJob` mutation. */
export type CreateKnowledgeBaseArticleDelayedJobInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `KnowledgeBaseArticleDelayedJob` to be created by this mutation. */
  knowledgeBaseArticleDelayedJob: KnowledgeBaseArticleDelayedJobInput;
};

/** The output of our create `KnowledgeBaseArticleDelayedJob` mutation. */
export type CreateKnowledgeBaseArticleDelayedJobPayload = {
  __typename?: 'CreateKnowledgeBaseArticleDelayedJobPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `KnowledgeBaseArticleDelayedJob` that was created by this mutation. */
  knowledgeBaseArticleDelayedJob?: Maybe<KnowledgeBaseArticleDelayedJob>;
  /** An edge for our `KnowledgeBaseArticleDelayedJob`. May be used by Relay 1. */
  knowledgeBaseArticleDelayedJobEdge?: Maybe<KnowledgeBaseArticleDelayedJobsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `KnowledgeBaseArticleDelayedJob` mutation. */
export type CreateKnowledgeBaseArticleDelayedJobPayloadKnowledgeBaseArticleDelayedJobEdgeArgs = {
  orderBy?: InputMaybe<Array<KnowledgeBaseArticleDelayedJobsOrderBy>>;
};

/** All input for the create `KnowledgeBaseArticle` mutation. */
export type CreateKnowledgeBaseArticleInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `KnowledgeBaseArticle` to be created by this mutation. */
  knowledgeBaseArticle: KnowledgeBaseArticleInput;
};

/** The output of our create `KnowledgeBaseArticle` mutation. */
export type CreateKnowledgeBaseArticlePayload = {
  __typename?: 'CreateKnowledgeBaseArticlePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `KnowledgeBaseArticle` that was created by this mutation. */
  knowledgeBaseArticle?: Maybe<KnowledgeBaseArticle>;
  /** An edge for our `KnowledgeBaseArticle`. May be used by Relay 1. */
  knowledgeBaseArticleEdge?: Maybe<KnowledgeBaseArticlesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `KnowledgeBaseArticle` mutation. */
export type CreateKnowledgeBaseArticlePayloadKnowledgeBaseArticleEdgeArgs = {
  orderBy?: InputMaybe<Array<KnowledgeBaseArticlesOrderBy>>;
};

/** All input for the create `KnowledgeBaseArticleTranslation` mutation. */
export type CreateKnowledgeBaseArticleTranslationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `KnowledgeBaseArticleTranslation` to be created by this mutation. */
  knowledgeBaseArticleTranslation: KnowledgeBaseArticleTranslationInput;
};

/** The output of our create `KnowledgeBaseArticleTranslation` mutation. */
export type CreateKnowledgeBaseArticleTranslationPayload = {
  __typename?: 'CreateKnowledgeBaseArticleTranslationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `KnowledgeBaseArticleTranslation` that was created by this mutation. */
  knowledgeBaseArticleTranslation?: Maybe<KnowledgeBaseArticleTranslation>;
  /** An edge for our `KnowledgeBaseArticleTranslation`. May be used by Relay 1. */
  knowledgeBaseArticleTranslationEdge?: Maybe<KnowledgeBaseArticleTranslationsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `KnowledgeBaseArticleTranslation` mutation. */
export type CreateKnowledgeBaseArticleTranslationPayloadKnowledgeBaseArticleTranslationEdgeArgs = {
  orderBy?: InputMaybe<Array<KnowledgeBaseArticleTranslationsOrderBy>>;
};

/** All input for the create `KnowledgeBaseCategoryDelayedJob` mutation. */
export type CreateKnowledgeBaseCategoryDelayedJobInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `KnowledgeBaseCategoryDelayedJob` to be created by this mutation. */
  knowledgeBaseCategoryDelayedJob: KnowledgeBaseCategoryDelayedJobInput;
};

/** The output of our create `KnowledgeBaseCategoryDelayedJob` mutation. */
export type CreateKnowledgeBaseCategoryDelayedJobPayload = {
  __typename?: 'CreateKnowledgeBaseCategoryDelayedJobPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `KnowledgeBaseCategoryDelayedJob` that was created by this mutation. */
  knowledgeBaseCategoryDelayedJob?: Maybe<KnowledgeBaseCategoryDelayedJob>;
  /** An edge for our `KnowledgeBaseCategoryDelayedJob`. May be used by Relay 1. */
  knowledgeBaseCategoryDelayedJobEdge?: Maybe<KnowledgeBaseCategoryDelayedJobsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `KnowledgeBaseCategoryDelayedJob` mutation. */
export type CreateKnowledgeBaseCategoryDelayedJobPayloadKnowledgeBaseCategoryDelayedJobEdgeArgs = {
  orderBy?: InputMaybe<Array<KnowledgeBaseCategoryDelayedJobsOrderBy>>;
};

/** All input for the create `KnowledgeBaseCategory` mutation. */
export type CreateKnowledgeBaseCategoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `KnowledgeBaseCategory` to be created by this mutation. */
  knowledgeBaseCategory: KnowledgeBaseCategoryInput;
};

/** The output of our create `KnowledgeBaseCategory` mutation. */
export type CreateKnowledgeBaseCategoryPayload = {
  __typename?: 'CreateKnowledgeBaseCategoryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `KnowledgeBaseCategory` that was created by this mutation. */
  knowledgeBaseCategory?: Maybe<KnowledgeBaseCategory>;
  /** An edge for our `KnowledgeBaseCategory`. May be used by Relay 1. */
  knowledgeBaseCategoryEdge?: Maybe<KnowledgeBaseCategoriesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `KnowledgeBaseCategory` mutation. */
export type CreateKnowledgeBaseCategoryPayloadKnowledgeBaseCategoryEdgeArgs = {
  orderBy?: InputMaybe<Array<KnowledgeBaseCategoriesOrderBy>>;
};

/** All input for the create `KnowledgeBaseCategoryTranslation` mutation. */
export type CreateKnowledgeBaseCategoryTranslationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `KnowledgeBaseCategoryTranslation` to be created by this mutation. */
  knowledgeBaseCategoryTranslation: KnowledgeBaseCategoryTranslationInput;
};

/** The output of our create `KnowledgeBaseCategoryTranslation` mutation. */
export type CreateKnowledgeBaseCategoryTranslationPayload = {
  __typename?: 'CreateKnowledgeBaseCategoryTranslationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `KnowledgeBaseCategoryTranslation` that was created by this mutation. */
  knowledgeBaseCategoryTranslation?: Maybe<KnowledgeBaseCategoryTranslation>;
  /** An edge for our `KnowledgeBaseCategoryTranslation`. May be used by Relay 1. */
  knowledgeBaseCategoryTranslationEdge?: Maybe<KnowledgeBaseCategoryTranslationsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `KnowledgeBaseCategoryTranslation` mutation. */
export type CreateKnowledgeBaseCategoryTranslationPayloadKnowledgeBaseCategoryTranslationEdgeArgs = {
  orderBy?: InputMaybe<Array<KnowledgeBaseCategoryTranslationsOrderBy>>;
};

/** All input for the create `KnowledgeBaseList` mutation. */
export type CreateKnowledgeBaseListInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `KnowledgeBaseList` to be created by this mutation. */
  knowledgeBaseList: KnowledgeBaseListInput;
};

/** The output of our create `KnowledgeBaseList` mutation. */
export type CreateKnowledgeBaseListPayload = {
  __typename?: 'CreateKnowledgeBaseListPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `KnowledgeBaseList` that was created by this mutation. */
  knowledgeBaseList?: Maybe<KnowledgeBaseList>;
  /** An edge for our `KnowledgeBaseList`. May be used by Relay 1. */
  knowledgeBaseListEdge?: Maybe<KnowledgeBaseListsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `KnowledgeBaseList` mutation. */
export type CreateKnowledgeBaseListPayloadKnowledgeBaseListEdgeArgs = {
  orderBy?: InputMaybe<Array<KnowledgeBaseListsOrderBy>>;
};

/** All input for the create `KnowledgeBaseTranslation` mutation. */
export type CreateKnowledgeBaseTranslationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `KnowledgeBaseTranslation` to be created by this mutation. */
  knowledgeBaseTranslation: KnowledgeBaseTranslationInput;
};

/** The output of our create `KnowledgeBaseTranslation` mutation. */
export type CreateKnowledgeBaseTranslationPayload = {
  __typename?: 'CreateKnowledgeBaseTranslationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `KnowledgeBaseTranslation` that was created by this mutation. */
  knowledgeBaseTranslation?: Maybe<KnowledgeBaseTranslation>;
  /** An edge for our `KnowledgeBaseTranslation`. May be used by Relay 1. */
  knowledgeBaseTranslationEdge?: Maybe<KnowledgeBaseTranslationsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `KnowledgeBaseTranslation` mutation. */
export type CreateKnowledgeBaseTranslationPayloadKnowledgeBaseTranslationEdgeArgs = {
  orderBy?: InputMaybe<Array<KnowledgeBaseTranslationsOrderBy>>;
};

/** All input for the create `KnowledgeBasis` mutation. */
export type CreateKnowledgeBasisInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `KnowledgeBasis` to be created by this mutation. */
  knowledgeBasis: KnowledgeBasisInput;
};

/** The output of our create `KnowledgeBasis` mutation. */
export type CreateKnowledgeBasisPayload = {
  __typename?: 'CreateKnowledgeBasisPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `KnowledgeBasis` that was created by this mutation. */
  knowledgeBasis?: Maybe<KnowledgeBasis>;
  /** An edge for our `KnowledgeBasis`. May be used by Relay 1. */
  knowledgeBasisEdge?: Maybe<KnowledgeBasesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `KnowledgeBasis` mutation. */
export type CreateKnowledgeBasisPayloadKnowledgeBasisEdgeArgs = {
  orderBy?: InputMaybe<Array<KnowledgeBasesOrderBy>>;
};

/** All input for the create `Locale` mutation. */
export type CreateLocaleInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Locale` to be created by this mutation. */
  locale: LocaleInput;
};

/** The output of our create `Locale` mutation. */
export type CreateLocalePayload = {
  __typename?: 'CreateLocalePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Locale` that was created by this mutation. */
  locale?: Maybe<Locale>;
  /** An edge for our `Locale`. May be used by Relay 1. */
  localeEdge?: Maybe<LocalesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Locale` mutation. */
export type CreateLocalePayloadLocaleEdgeArgs = {
  orderBy?: InputMaybe<Array<LocalesOrderBy>>;
};

/** All input for the `deleteActivityStreamById` mutation. */
export type DeleteActivityStreamByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** All input for the `deleteActivityStream` mutation. */
export type DeleteActivityStreamInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `ActivityStream` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `ActivityStream` mutation. */
export type DeleteActivityStreamPayload = {
  __typename?: 'DeleteActivityStreamPayload';
  /** The `ActivityStream` that was deleted by this mutation. */
  activityStream?: Maybe<ActivityStream>;
  /** An edge for our `ActivityStream`. May be used by Relay 1. */
  activityStreamEdge?: Maybe<ActivityStreamsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedActivityStreamId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `ActivityStream` mutation. */
export type DeleteActivityStreamPayloadActivityStreamEdgeArgs = {
  orderBy?: InputMaybe<Array<ActivityStreamsOrderBy>>;
};

/** All input for the `deleteKnowledgeBaseArticleById` mutation. */
export type DeleteKnowledgeBaseArticleByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** All input for the `deleteKnowledgeBaseArticleDelayedJobById` mutation. */
export type DeleteKnowledgeBaseArticleDelayedJobByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** All input for the `deleteKnowledgeBaseArticleDelayedJob` mutation. */
export type DeleteKnowledgeBaseArticleDelayedJobInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `KnowledgeBaseArticleDelayedJob` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `KnowledgeBaseArticleDelayedJob` mutation. */
export type DeleteKnowledgeBaseArticleDelayedJobPayload = {
  __typename?: 'DeleteKnowledgeBaseArticleDelayedJobPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedKnowledgeBaseArticleDelayedJobId?: Maybe<Scalars['ID']>;
  /** The `KnowledgeBaseArticleDelayedJob` that was deleted by this mutation. */
  knowledgeBaseArticleDelayedJob?: Maybe<KnowledgeBaseArticleDelayedJob>;
  /** An edge for our `KnowledgeBaseArticleDelayedJob`. May be used by Relay 1. */
  knowledgeBaseArticleDelayedJobEdge?: Maybe<KnowledgeBaseArticleDelayedJobsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `KnowledgeBaseArticleDelayedJob` mutation. */
export type DeleteKnowledgeBaseArticleDelayedJobPayloadKnowledgeBaseArticleDelayedJobEdgeArgs = {
  orderBy?: InputMaybe<Array<KnowledgeBaseArticleDelayedJobsOrderBy>>;
};

/** All input for the `deleteKnowledgeBaseArticle` mutation. */
export type DeleteKnowledgeBaseArticleInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `KnowledgeBaseArticle` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `KnowledgeBaseArticle` mutation. */
export type DeleteKnowledgeBaseArticlePayload = {
  __typename?: 'DeleteKnowledgeBaseArticlePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedKnowledgeBaseArticleId?: Maybe<Scalars['ID']>;
  /** The `KnowledgeBaseArticle` that was deleted by this mutation. */
  knowledgeBaseArticle?: Maybe<KnowledgeBaseArticle>;
  /** An edge for our `KnowledgeBaseArticle`. May be used by Relay 1. */
  knowledgeBaseArticleEdge?: Maybe<KnowledgeBaseArticlesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `KnowledgeBaseArticle` mutation. */
export type DeleteKnowledgeBaseArticlePayloadKnowledgeBaseArticleEdgeArgs = {
  orderBy?: InputMaybe<Array<KnowledgeBaseArticlesOrderBy>>;
};

/** All input for the `deleteKnowledgeBaseArticleTranslationById` mutation. */
export type DeleteKnowledgeBaseArticleTranslationByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** All input for the `deleteKnowledgeBaseArticleTranslation` mutation. */
export type DeleteKnowledgeBaseArticleTranslationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `KnowledgeBaseArticleTranslation` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `KnowledgeBaseArticleTranslation` mutation. */
export type DeleteKnowledgeBaseArticleTranslationPayload = {
  __typename?: 'DeleteKnowledgeBaseArticleTranslationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedKnowledgeBaseArticleTranslationId?: Maybe<Scalars['ID']>;
  /** The `KnowledgeBaseArticleTranslation` that was deleted by this mutation. */
  knowledgeBaseArticleTranslation?: Maybe<KnowledgeBaseArticleTranslation>;
  /** An edge for our `KnowledgeBaseArticleTranslation`. May be used by Relay 1. */
  knowledgeBaseArticleTranslationEdge?: Maybe<KnowledgeBaseArticleTranslationsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `KnowledgeBaseArticleTranslation` mutation. */
export type DeleteKnowledgeBaseArticleTranslationPayloadKnowledgeBaseArticleTranslationEdgeArgs = {
  orderBy?: InputMaybe<Array<KnowledgeBaseArticleTranslationsOrderBy>>;
};

/** All input for the `deleteKnowledgeBaseCategoryById` mutation. */
export type DeleteKnowledgeBaseCategoryByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** All input for the `deleteKnowledgeBaseCategoryDelayedJobById` mutation. */
export type DeleteKnowledgeBaseCategoryDelayedJobByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** All input for the `deleteKnowledgeBaseCategoryDelayedJob` mutation. */
export type DeleteKnowledgeBaseCategoryDelayedJobInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `KnowledgeBaseCategoryDelayedJob` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `KnowledgeBaseCategoryDelayedJob` mutation. */
export type DeleteKnowledgeBaseCategoryDelayedJobPayload = {
  __typename?: 'DeleteKnowledgeBaseCategoryDelayedJobPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedKnowledgeBaseCategoryDelayedJobId?: Maybe<Scalars['ID']>;
  /** The `KnowledgeBaseCategoryDelayedJob` that was deleted by this mutation. */
  knowledgeBaseCategoryDelayedJob?: Maybe<KnowledgeBaseCategoryDelayedJob>;
  /** An edge for our `KnowledgeBaseCategoryDelayedJob`. May be used by Relay 1. */
  knowledgeBaseCategoryDelayedJobEdge?: Maybe<KnowledgeBaseCategoryDelayedJobsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `KnowledgeBaseCategoryDelayedJob` mutation. */
export type DeleteKnowledgeBaseCategoryDelayedJobPayloadKnowledgeBaseCategoryDelayedJobEdgeArgs = {
  orderBy?: InputMaybe<Array<KnowledgeBaseCategoryDelayedJobsOrderBy>>;
};

/** All input for the `deleteKnowledgeBaseCategory` mutation. */
export type DeleteKnowledgeBaseCategoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `KnowledgeBaseCategory` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `KnowledgeBaseCategory` mutation. */
export type DeleteKnowledgeBaseCategoryPayload = {
  __typename?: 'DeleteKnowledgeBaseCategoryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedKnowledgeBaseCategoryId?: Maybe<Scalars['ID']>;
  /** The `KnowledgeBaseCategory` that was deleted by this mutation. */
  knowledgeBaseCategory?: Maybe<KnowledgeBaseCategory>;
  /** An edge for our `KnowledgeBaseCategory`. May be used by Relay 1. */
  knowledgeBaseCategoryEdge?: Maybe<KnowledgeBaseCategoriesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `KnowledgeBaseCategory` mutation. */
export type DeleteKnowledgeBaseCategoryPayloadKnowledgeBaseCategoryEdgeArgs = {
  orderBy?: InputMaybe<Array<KnowledgeBaseCategoriesOrderBy>>;
};

/** All input for the `deleteKnowledgeBaseCategoryTranslationById` mutation. */
export type DeleteKnowledgeBaseCategoryTranslationByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** All input for the `deleteKnowledgeBaseCategoryTranslation` mutation. */
export type DeleteKnowledgeBaseCategoryTranslationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `KnowledgeBaseCategoryTranslation` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `KnowledgeBaseCategoryTranslation` mutation. */
export type DeleteKnowledgeBaseCategoryTranslationPayload = {
  __typename?: 'DeleteKnowledgeBaseCategoryTranslationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedKnowledgeBaseCategoryTranslationId?: Maybe<Scalars['ID']>;
  /** The `KnowledgeBaseCategoryTranslation` that was deleted by this mutation. */
  knowledgeBaseCategoryTranslation?: Maybe<KnowledgeBaseCategoryTranslation>;
  /** An edge for our `KnowledgeBaseCategoryTranslation`. May be used by Relay 1. */
  knowledgeBaseCategoryTranslationEdge?: Maybe<KnowledgeBaseCategoryTranslationsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `KnowledgeBaseCategoryTranslation` mutation. */
export type DeleteKnowledgeBaseCategoryTranslationPayloadKnowledgeBaseCategoryTranslationEdgeArgs = {
  orderBy?: InputMaybe<Array<KnowledgeBaseCategoryTranslationsOrderBy>>;
};

/** All input for the `deleteKnowledgeBaseListById` mutation. */
export type DeleteKnowledgeBaseListByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** All input for the `deleteKnowledgeBaseList` mutation. */
export type DeleteKnowledgeBaseListInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `KnowledgeBaseList` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `KnowledgeBaseList` mutation. */
export type DeleteKnowledgeBaseListPayload = {
  __typename?: 'DeleteKnowledgeBaseListPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedKnowledgeBaseListId?: Maybe<Scalars['ID']>;
  /** The `KnowledgeBaseList` that was deleted by this mutation. */
  knowledgeBaseList?: Maybe<KnowledgeBaseList>;
  /** An edge for our `KnowledgeBaseList`. May be used by Relay 1. */
  knowledgeBaseListEdge?: Maybe<KnowledgeBaseListsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `KnowledgeBaseList` mutation. */
export type DeleteKnowledgeBaseListPayloadKnowledgeBaseListEdgeArgs = {
  orderBy?: InputMaybe<Array<KnowledgeBaseListsOrderBy>>;
};

/** All input for the `deleteKnowledgeBaseTranslationById` mutation. */
export type DeleteKnowledgeBaseTranslationByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** All input for the `deleteKnowledgeBaseTranslation` mutation. */
export type DeleteKnowledgeBaseTranslationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `KnowledgeBaseTranslation` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `KnowledgeBaseTranslation` mutation. */
export type DeleteKnowledgeBaseTranslationPayload = {
  __typename?: 'DeleteKnowledgeBaseTranslationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedKnowledgeBaseTranslationId?: Maybe<Scalars['ID']>;
  /** The `KnowledgeBaseTranslation` that was deleted by this mutation. */
  knowledgeBaseTranslation?: Maybe<KnowledgeBaseTranslation>;
  /** An edge for our `KnowledgeBaseTranslation`. May be used by Relay 1. */
  knowledgeBaseTranslationEdge?: Maybe<KnowledgeBaseTranslationsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `KnowledgeBaseTranslation` mutation. */
export type DeleteKnowledgeBaseTranslationPayloadKnowledgeBaseTranslationEdgeArgs = {
  orderBy?: InputMaybe<Array<KnowledgeBaseTranslationsOrderBy>>;
};

/** All input for the `deleteKnowledgeBasisById` mutation. */
export type DeleteKnowledgeBasisByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** All input for the `deleteKnowledgeBasis` mutation. */
export type DeleteKnowledgeBasisInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `KnowledgeBasis` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `KnowledgeBasis` mutation. */
export type DeleteKnowledgeBasisPayload = {
  __typename?: 'DeleteKnowledgeBasisPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedKnowledgeBasisId?: Maybe<Scalars['ID']>;
  /** The `KnowledgeBasis` that was deleted by this mutation. */
  knowledgeBasis?: Maybe<KnowledgeBasis>;
  /** An edge for our `KnowledgeBasis`. May be used by Relay 1. */
  knowledgeBasisEdge?: Maybe<KnowledgeBasesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `KnowledgeBasis` mutation. */
export type DeleteKnowledgeBasisPayloadKnowledgeBasisEdgeArgs = {
  orderBy?: InputMaybe<Array<KnowledgeBasesOrderBy>>;
};

/** All input for the `deleteLocaleById` mutation. */
export type DeleteLocaleByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** All input for the `deleteLocale` mutation. */
export type DeleteLocaleInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Locale` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Locale` mutation. */
export type DeleteLocalePayload = {
  __typename?: 'DeleteLocalePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedLocaleId?: Maybe<Scalars['ID']>;
  /** The `Locale` that was deleted by this mutation. */
  locale?: Maybe<Locale>;
  /** An edge for our `Locale`. May be used by Relay 1. */
  localeEdge?: Maybe<LocalesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Locale` mutation. */
export type DeleteLocalePayloadLocaleEdgeArgs = {
  orderBy?: InputMaybe<Array<LocalesOrderBy>>;
};

/** This is used to return the link for the exported knowledgebase */
export type ExportKnowledgeBaseType = {
  __typename?: 'ExportKnowledgeBaseType';
  link?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type KnowledgeBaseArticle = Node & {
  __typename?: 'KnowledgeBaseArticle';
  categoryId: Scalars['Int'];
  createdAt: Scalars['Datetime'];
  id: Scalars['Int'];
  isArchived: Scalars['Boolean'];
  knowledgeBaseId?: Maybe<Scalars['Int']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  position: Scalars['Int'];
  updatedAt?: Maybe<Scalars['Datetime']>;
};

/**
 * A condition to be used against `KnowledgeBaseArticle` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type KnowledgeBaseArticleCondition = {
  /** Checks for equality with the object’s `categoryId` field. */
  categoryId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `isArchived` field. */
  isArchived?: InputMaybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `knowledgeBaseId` field. */
  knowledgeBaseId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `position` field. */
  position?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

export type KnowledgeBaseArticleDelayedJob = Node & {
  __typename?: 'KnowledgeBaseArticleDelayedJob';
  createdAt: Scalars['Datetime'];
  id: Scalars['Int'];
  knowledgeBaseArticleId: Scalars['Int'];
  knowledgeBaseArticleTranslationId: Scalars['Int'];
  knowledgeBaseId: Scalars['Int'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  publishUpdateDelete?: Maybe<Scalars['String']>;
  runAt: Scalars['Datetime'];
};

/**
 * A condition to be used against `KnowledgeBaseArticleDelayedJob` object types.
 * All fields are tested for equality and combined with a logical ‘and.’
 */
export type KnowledgeBaseArticleDelayedJobCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `knowledgeBaseArticleId` field. */
  knowledgeBaseArticleId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `knowledgeBaseArticleTranslationId` field. */
  knowledgeBaseArticleTranslationId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `knowledgeBaseId` field. */
  knowledgeBaseId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `publishUpdateDelete` field. */
  publishUpdateDelete?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `runAt` field. */
  runAt?: InputMaybe<Scalars['Datetime']>;
};

/** An input for mutations affecting `KnowledgeBaseArticleDelayedJob` */
export type KnowledgeBaseArticleDelayedJobInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['Int']>;
  knowledgeBaseArticleId: Scalars['Int'];
  knowledgeBaseArticleTranslationId: Scalars['Int'];
  knowledgeBaseId: Scalars['Int'];
  publishUpdateDelete?: InputMaybe<Scalars['String']>;
  runAt: Scalars['Datetime'];
};

/** Represents an update to a `KnowledgeBaseArticleDelayedJob`. Fields that are set will be updated. */
export type KnowledgeBaseArticleDelayedJobPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['Int']>;
  knowledgeBaseArticleId?: InputMaybe<Scalars['Int']>;
  knowledgeBaseArticleTranslationId?: InputMaybe<Scalars['Int']>;
  knowledgeBaseId?: InputMaybe<Scalars['Int']>;
  publishUpdateDelete?: InputMaybe<Scalars['String']>;
  runAt?: InputMaybe<Scalars['Datetime']>;
};

/** This is used to return a schedule for an article */
export type KnowledgeBaseArticleDelayedJobType = {
  __typename?: 'KnowledgeBaseArticleDelayedJobType';
  created_at?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  knowledge_base_article_id?: Maybe<Scalars['ID']>;
  knowledge_base_article_translation_id?: Maybe<Scalars['ID']>;
  knowledge_base_id?: Maybe<Scalars['ID']>;
  publish_update_delete?: Maybe<Scalars['String']>;
  run_at?: Maybe<Scalars['String']>;
};

/** A connection to a list of `KnowledgeBaseArticleDelayedJob` values. */
export type KnowledgeBaseArticleDelayedJobsConnection = {
  __typename?: 'KnowledgeBaseArticleDelayedJobsConnection';
  /** A list of edges which contains the `KnowledgeBaseArticleDelayedJob` and cursor to aid in pagination. */
  edges: Array<KnowledgeBaseArticleDelayedJobsEdge>;
  /** A list of `KnowledgeBaseArticleDelayedJob` objects. */
  nodes: Array<Maybe<KnowledgeBaseArticleDelayedJob>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `KnowledgeBaseArticleDelayedJob` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `KnowledgeBaseArticleDelayedJob` edge in the connection. */
export type KnowledgeBaseArticleDelayedJobsEdge = {
  __typename?: 'KnowledgeBaseArticleDelayedJobsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `KnowledgeBaseArticleDelayedJob` at the end of the edge. */
  node?: Maybe<KnowledgeBaseArticleDelayedJob>;
};

/** Methods to use when ordering `KnowledgeBaseArticleDelayedJob`. */
export enum KnowledgeBaseArticleDelayedJobsOrderBy {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  KnowledgeBaseArticleIdAsc = 'KNOWLEDGE_BASE_ARTICLE_ID_ASC',
  KnowledgeBaseArticleIdDesc = 'KNOWLEDGE_BASE_ARTICLE_ID_DESC',
  KnowledgeBaseArticleTranslationIdAsc = 'KNOWLEDGE_BASE_ARTICLE_TRANSLATION_ID_ASC',
  KnowledgeBaseArticleTranslationIdDesc = 'KNOWLEDGE_BASE_ARTICLE_TRANSLATION_ID_DESC',
  KnowledgeBaseIdAsc = 'KNOWLEDGE_BASE_ID_ASC',
  KnowledgeBaseIdDesc = 'KNOWLEDGE_BASE_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  PublishUpdateDeleteAsc = 'PUBLISH_UPDATE_DELETE_ASC',
  PublishUpdateDeleteDesc = 'PUBLISH_UPDATE_DELETE_DESC',
  RunAtAsc = 'RUN_AT_ASC',
  RunAtDesc = 'RUN_AT_DESC'
}

/** An input for mutations affecting `KnowledgeBaseArticle` */
export type KnowledgeBaseArticleInput = {
  categoryId: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['Int']>;
  isArchived?: InputMaybe<Scalars['Boolean']>;
  knowledgeBaseId?: InputMaybe<Scalars['Int']>;
  position: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

/** Represents an update to a `KnowledgeBaseArticle`. Fields that are set will be updated. */
export type KnowledgeBaseArticlePatch = {
  categoryId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['Int']>;
  isArchived?: InputMaybe<Scalars['Boolean']>;
  knowledgeBaseId?: InputMaybe<Scalars['Int']>;
  position?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

export type KnowledgeBaseArticleTranslation = Node & {
  __typename?: 'KnowledgeBaseArticleTranslation';
  active?: Maybe<Scalars['Boolean']>;
  articleId?: Maybe<Scalars['Int']>;
  body?: Maybe<Scalars['String']>;
  categoryId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['Datetime'];
  id: Scalars['Int'];
  isArchived: Scalars['Boolean'];
  isDeleteScheduled?: Maybe<Scalars['Boolean']>;
  isUpdateScheduled?: Maybe<Scalars['Boolean']>;
  kbLocaleId?: Maybe<Scalars['Int']>;
  keywords?: Maybe<Scalars['String']>;
  knowledgeBaseId?: Maybe<Scalars['Int']>;
  listId?: Maybe<Scalars['Int']>;
  listName?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  position?: Maybe<Scalars['Int']>;
  publishNow: Scalars['Boolean'];
  title?: Maybe<Scalars['String']>;
  titleTag?: Maybe<Scalars['String']>;
  uiColor: Scalars['String'];
  updateMetadata?: Maybe<Scalars['String']>;
  updatedAt: Scalars['Datetime'];
};

/**
 * A condition to be used against `KnowledgeBaseArticleTranslation` object types.
 * All fields are tested for equality and combined with a logical ‘and.’
 */
export type KnowledgeBaseArticleTranslationCondition = {
  /** Checks for equality with the object’s `active` field. */
  active?: InputMaybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `articleId` field. */
  articleId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `body` field. */
  body?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `categoryId` field. */
  categoryId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `isArchived` field. */
  isArchived?: InputMaybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `isDeleteScheduled` field. */
  isDeleteScheduled?: InputMaybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `isUpdateScheduled` field. */
  isUpdateScheduled?: InputMaybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `kbLocaleId` field. */
  kbLocaleId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `keywords` field. */
  keywords?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `knowledgeBaseId` field. */
  knowledgeBaseId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `listId` field. */
  listId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `listName` field. */
  listName?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `metaDescription` field. */
  metaDescription?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `position` field. */
  position?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `publishNow` field. */
  publishNow?: InputMaybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `title` field. */
  title?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `titleTag` field. */
  titleTag?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `uiColor` field. */
  uiColor?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `updateMetadata` field. */
  updateMetadata?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

/** An input for mutations affecting `KnowledgeBaseArticleTranslation` */
export type KnowledgeBaseArticleTranslationInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  articleId?: InputMaybe<Scalars['Int']>;
  body?: InputMaybe<Scalars['String']>;
  categoryId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['Int']>;
  isArchived?: InputMaybe<Scalars['Boolean']>;
  isDeleteScheduled?: InputMaybe<Scalars['Boolean']>;
  isUpdateScheduled?: InputMaybe<Scalars['Boolean']>;
  kbLocaleId?: InputMaybe<Scalars['Int']>;
  keywords?: InputMaybe<Scalars['String']>;
  knowledgeBaseId?: InputMaybe<Scalars['Int']>;
  listId?: InputMaybe<Scalars['Int']>;
  listName?: InputMaybe<Scalars['String']>;
  metaDescription?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['Int']>;
  publishNow?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  titleTag?: InputMaybe<Scalars['String']>;
  uiColor?: InputMaybe<Scalars['String']>;
  updateMetadata?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

/** Represents an update to a `KnowledgeBaseArticleTranslation`. Fields that are set will be updated. */
export type KnowledgeBaseArticleTranslationPatch = {
  active?: InputMaybe<Scalars['Boolean']>;
  articleId?: InputMaybe<Scalars['Int']>;
  body?: InputMaybe<Scalars['String']>;
  categoryId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['Int']>;
  isArchived?: InputMaybe<Scalars['Boolean']>;
  isDeleteScheduled?: InputMaybe<Scalars['Boolean']>;
  isUpdateScheduled?: InputMaybe<Scalars['Boolean']>;
  kbLocaleId?: InputMaybe<Scalars['Int']>;
  keywords?: InputMaybe<Scalars['String']>;
  knowledgeBaseId?: InputMaybe<Scalars['Int']>;
  listId?: InputMaybe<Scalars['Int']>;
  listName?: InputMaybe<Scalars['String']>;
  metaDescription?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['Int']>;
  publishNow?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  titleTag?: InputMaybe<Scalars['String']>;
  uiColor?: InputMaybe<Scalars['String']>;
  updateMetadata?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

/** This is used to schedule an article for update */
export type KnowledgeBaseArticleTranslationTypeInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  article_id?: InputMaybe<Scalars['ID']>;
  body?: InputMaybe<Scalars['String']>;
  category_id?: InputMaybe<Scalars['ID']>;
  created_at?: InputMaybe<Scalars['String']>;
  kb_locale_id?: InputMaybe<Scalars['ID']>;
  keywords?: InputMaybe<Scalars['String']>;
  knowledge_base_id?: InputMaybe<Scalars['ID']>;
  list_id?: InputMaybe<Scalars['Int']>;
  meta_description?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['Int']>;
  publish_now?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  title_tag?: InputMaybe<Scalars['String']>;
  update_metadata?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `KnowledgeBaseArticleTranslation` values. */
export type KnowledgeBaseArticleTranslationsConnection = {
  __typename?: 'KnowledgeBaseArticleTranslationsConnection';
  /** A list of edges which contains the `KnowledgeBaseArticleTranslation` and cursor to aid in pagination. */
  edges: Array<KnowledgeBaseArticleTranslationsEdge>;
  /** A list of `KnowledgeBaseArticleTranslation` objects. */
  nodes: Array<Maybe<KnowledgeBaseArticleTranslation>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `KnowledgeBaseArticleTranslation` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `KnowledgeBaseArticleTranslation` edge in the connection. */
export type KnowledgeBaseArticleTranslationsEdge = {
  __typename?: 'KnowledgeBaseArticleTranslationsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `KnowledgeBaseArticleTranslation` at the end of the edge. */
  node?: Maybe<KnowledgeBaseArticleTranslation>;
};

/** Methods to use when ordering `KnowledgeBaseArticleTranslation`. */
export enum KnowledgeBaseArticleTranslationsOrderBy {
  ActiveAsc = 'ACTIVE_ASC',
  ActiveDesc = 'ACTIVE_DESC',
  ArticleIdAsc = 'ARTICLE_ID_ASC',
  ArticleIdDesc = 'ARTICLE_ID_DESC',
  BodyAsc = 'BODY_ASC',
  BodyDesc = 'BODY_DESC',
  CategoryIdAsc = 'CATEGORY_ID_ASC',
  CategoryIdDesc = 'CATEGORY_ID_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  IsArchivedAsc = 'IS_ARCHIVED_ASC',
  IsArchivedDesc = 'IS_ARCHIVED_DESC',
  IsDeleteScheduledAsc = 'IS_DELETE_SCHEDULED_ASC',
  IsDeleteScheduledDesc = 'IS_DELETE_SCHEDULED_DESC',
  IsUpdateScheduledAsc = 'IS_UPDATE_SCHEDULED_ASC',
  IsUpdateScheduledDesc = 'IS_UPDATE_SCHEDULED_DESC',
  KbLocaleIdAsc = 'KB_LOCALE_ID_ASC',
  KbLocaleIdDesc = 'KB_LOCALE_ID_DESC',
  KeywordsAsc = 'KEYWORDS_ASC',
  KeywordsDesc = 'KEYWORDS_DESC',
  KnowledgeBaseIdAsc = 'KNOWLEDGE_BASE_ID_ASC',
  KnowledgeBaseIdDesc = 'KNOWLEDGE_BASE_ID_DESC',
  ListIdAsc = 'LIST_ID_ASC',
  ListIdDesc = 'LIST_ID_DESC',
  ListNameAsc = 'LIST_NAME_ASC',
  ListNameDesc = 'LIST_NAME_DESC',
  MetaDescriptionAsc = 'META_DESCRIPTION_ASC',
  MetaDescriptionDesc = 'META_DESCRIPTION_DESC',
  Natural = 'NATURAL',
  PositionAsc = 'POSITION_ASC',
  PositionDesc = 'POSITION_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  PublishNowAsc = 'PUBLISH_NOW_ASC',
  PublishNowDesc = 'PUBLISH_NOW_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  TitleTagAsc = 'TITLE_TAG_ASC',
  TitleTagDesc = 'TITLE_TAG_DESC',
  UiColorAsc = 'UI_COLOR_ASC',
  UiColorDesc = 'UI_COLOR_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  UpdateMetadataAsc = 'UPDATE_METADATA_ASC',
  UpdateMetadataDesc = 'UPDATE_METADATA_DESC'
}

/** This returns an object of the knowledge base article type */
export type KnowledgeBaseArticleType = {
  __typename?: 'KnowledgeBaseArticleType';
  active?: Maybe<Scalars['Boolean']>;
  article_id?: Maybe<Scalars['ID']>;
  body?: Maybe<Scalars['String']>;
  category_id?: Maybe<Scalars['ID']>;
  created_at?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  is_archived?: Maybe<Scalars['Boolean']>;
  is_delete_scheduled?: Maybe<Scalars['Boolean']>;
  is_update_scheduled?: Maybe<Scalars['Boolean']>;
  kb_locale_id?: Maybe<Scalars['ID']>;
  keywords?: Maybe<Scalars['String']>;
  knowledge_base_id?: Maybe<Scalars['ID']>;
  list_id?: Maybe<Scalars['Int']>;
  meta_description?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  publish_now?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_tag?: Maybe<Scalars['String']>;
  ui_color?: Maybe<Scalars['String']>;
  update_metadata?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
};

/** A connection to a list of `KnowledgeBaseArticle` values. */
export type KnowledgeBaseArticlesConnection = {
  __typename?: 'KnowledgeBaseArticlesConnection';
  /** A list of edges which contains the `KnowledgeBaseArticle` and cursor to aid in pagination. */
  edges: Array<KnowledgeBaseArticlesEdge>;
  /** A list of `KnowledgeBaseArticle` objects. */
  nodes: Array<Maybe<KnowledgeBaseArticle>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `KnowledgeBaseArticle` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `KnowledgeBaseArticle` edge in the connection. */
export type KnowledgeBaseArticlesEdge = {
  __typename?: 'KnowledgeBaseArticlesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `KnowledgeBaseArticle` at the end of the edge. */
  node?: Maybe<KnowledgeBaseArticle>;
};

/** Methods to use when ordering `KnowledgeBaseArticle`. */
export enum KnowledgeBaseArticlesOrderBy {
  CategoryIdAsc = 'CATEGORY_ID_ASC',
  CategoryIdDesc = 'CATEGORY_ID_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  IsArchivedAsc = 'IS_ARCHIVED_ASC',
  IsArchivedDesc = 'IS_ARCHIVED_DESC',
  KnowledgeBaseIdAsc = 'KNOWLEDGE_BASE_ID_ASC',
  KnowledgeBaseIdDesc = 'KNOWLEDGE_BASE_ID_DESC',
  Natural = 'NATURAL',
  PositionAsc = 'POSITION_ASC',
  PositionDesc = 'POSITION_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC'
}

/** A connection to a list of `KnowledgeBaseCategory` values. */
export type KnowledgeBaseCategoriesConnection = {
  __typename?: 'KnowledgeBaseCategoriesConnection';
  /** A list of edges which contains the `KnowledgeBaseCategory` and cursor to aid in pagination. */
  edges: Array<KnowledgeBaseCategoriesEdge>;
  /** A list of `KnowledgeBaseCategory` objects. */
  nodes: Array<Maybe<KnowledgeBaseCategory>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `KnowledgeBaseCategory` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `KnowledgeBaseCategory` edge in the connection. */
export type KnowledgeBaseCategoriesEdge = {
  __typename?: 'KnowledgeBaseCategoriesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `KnowledgeBaseCategory` at the end of the edge. */
  node?: Maybe<KnowledgeBaseCategory>;
};

/** Methods to use when ordering `KnowledgeBaseCategory`. */
export enum KnowledgeBaseCategoriesOrderBy {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  IsArchivedAsc = 'IS_ARCHIVED_ASC',
  IsArchivedDesc = 'IS_ARCHIVED_DESC',
  KnowledgeBaseIdAsc = 'KNOWLEDGE_BASE_ID_ASC',
  KnowledgeBaseIdDesc = 'KNOWLEDGE_BASE_ID_DESC',
  Natural = 'NATURAL',
  ParentIdAsc = 'PARENT_ID_ASC',
  ParentIdDesc = 'PARENT_ID_DESC',
  PositionAsc = 'POSITION_ASC',
  PositionDesc = 'POSITION_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC'
}

export type KnowledgeBaseCategory = Node & {
  __typename?: 'KnowledgeBaseCategory';
  createdAt: Scalars['Datetime'];
  id: Scalars['Int'];
  isArchived: Scalars['Boolean'];
  knowledgeBaseId: Scalars['Int'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  parentId?: Maybe<Scalars['Int']>;
  position: Scalars['Int'];
  updatedAt: Scalars['Datetime'];
};

/**
 * A condition to be used against `KnowledgeBaseCategory` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type KnowledgeBaseCategoryCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `isArchived` field. */
  isArchived?: InputMaybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `knowledgeBaseId` field. */
  knowledgeBaseId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `parentId` field. */
  parentId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `position` field. */
  position?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

export type KnowledgeBaseCategoryDelayedJob = Node & {
  __typename?: 'KnowledgeBaseCategoryDelayedJob';
  createdAt: Scalars['Datetime'];
  id: Scalars['Int'];
  knowledgeBaseCategoryTranslationId: Scalars['Int'];
  knowledgeBaseId?: Maybe<Scalars['Int']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  publishUpdateDelete?: Maybe<Scalars['String']>;
  runAt: Scalars['Datetime'];
};

/**
 * A condition to be used against `KnowledgeBaseCategoryDelayedJob` object types.
 * All fields are tested for equality and combined with a logical ‘and.’
 */
export type KnowledgeBaseCategoryDelayedJobCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `knowledgeBaseCategoryTranslationId` field. */
  knowledgeBaseCategoryTranslationId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `knowledgeBaseId` field. */
  knowledgeBaseId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `publishUpdateDelete` field. */
  publishUpdateDelete?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `runAt` field. */
  runAt?: InputMaybe<Scalars['Datetime']>;
};

/** An input for mutations affecting `KnowledgeBaseCategoryDelayedJob` */
export type KnowledgeBaseCategoryDelayedJobInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['Int']>;
  knowledgeBaseCategoryTranslationId: Scalars['Int'];
  knowledgeBaseId?: InputMaybe<Scalars['Int']>;
  publishUpdateDelete?: InputMaybe<Scalars['String']>;
  runAt?: InputMaybe<Scalars['Datetime']>;
};

/** Represents an update to a `KnowledgeBaseCategoryDelayedJob`. Fields that are set will be updated. */
export type KnowledgeBaseCategoryDelayedJobPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['Int']>;
  knowledgeBaseCategoryTranslationId?: InputMaybe<Scalars['Int']>;
  knowledgeBaseId?: InputMaybe<Scalars['Int']>;
  publishUpdateDelete?: InputMaybe<Scalars['String']>;
  runAt?: InputMaybe<Scalars['Datetime']>;
};

/** A connection to a list of `KnowledgeBaseCategoryDelayedJob` values. */
export type KnowledgeBaseCategoryDelayedJobsConnection = {
  __typename?: 'KnowledgeBaseCategoryDelayedJobsConnection';
  /** A list of edges which contains the `KnowledgeBaseCategoryDelayedJob` and cursor to aid in pagination. */
  edges: Array<KnowledgeBaseCategoryDelayedJobsEdge>;
  /** A list of `KnowledgeBaseCategoryDelayedJob` objects. */
  nodes: Array<Maybe<KnowledgeBaseCategoryDelayedJob>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `KnowledgeBaseCategoryDelayedJob` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `KnowledgeBaseCategoryDelayedJob` edge in the connection. */
export type KnowledgeBaseCategoryDelayedJobsEdge = {
  __typename?: 'KnowledgeBaseCategoryDelayedJobsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `KnowledgeBaseCategoryDelayedJob` at the end of the edge. */
  node?: Maybe<KnowledgeBaseCategoryDelayedJob>;
};

/** Methods to use when ordering `KnowledgeBaseCategoryDelayedJob`. */
export enum KnowledgeBaseCategoryDelayedJobsOrderBy {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  KnowledgeBaseCategoryTranslationIdAsc = 'KNOWLEDGE_BASE_CATEGORY_TRANSLATION_ID_ASC',
  KnowledgeBaseCategoryTranslationIdDesc = 'KNOWLEDGE_BASE_CATEGORY_TRANSLATION_ID_DESC',
  KnowledgeBaseIdAsc = 'KNOWLEDGE_BASE_ID_ASC',
  KnowledgeBaseIdDesc = 'KNOWLEDGE_BASE_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  PublishUpdateDeleteAsc = 'PUBLISH_UPDATE_DELETE_ASC',
  PublishUpdateDeleteDesc = 'PUBLISH_UPDATE_DELETE_DESC',
  RunAtAsc = 'RUN_AT_ASC',
  RunAtDesc = 'RUN_AT_DESC'
}

/** This returns an object of the knowledge base category, knowledge base category translation and stat type */
export type KnowledgeBaseCategoryHybridStatType = {
  __typename?: 'KnowledgeBaseCategoryHybridStatType';
  data?: Maybe<KnowledgeBaseCategoryHybridType>;
  stat?: Maybe<KnowledgeBaseCategoryStatType>;
};

/** This returns an object of the knowledge base category and knowledge base category translation type */
export type KnowledgeBaseCategoryHybridType = {
  __typename?: 'KnowledgeBaseCategoryHybridType';
  info?: Maybe<KnowledgeBaseCategoryInfoType>;
  knowledge_base_category?: Maybe<KnowledgeBaseCategoryType>;
  knowledge_base_category_translation?: Maybe<KnowledgeBaseCategoryTranslationType>;
};

/** This returns an object of the knowledge base info type */
export type KnowledgeBaseCategoryInfoType = {
  __typename?: 'KnowledgeBaseCategoryInfoType';
  parent_name?: Maybe<Scalars['String']>;
};

/** An input for mutations affecting `KnowledgeBaseCategory` */
export type KnowledgeBaseCategoryInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['Int']>;
  isArchived?: InputMaybe<Scalars['Boolean']>;
  knowledgeBaseId: Scalars['Int'];
  parentId?: InputMaybe<Scalars['Int']>;
  position: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

/** Returns the level and depth of a knowledge base category */
export type KnowledgeBaseCategoryLevelType = {
  __typename?: 'KnowledgeBaseCategoryLevelType';
  depth?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  max_level?: Maybe<Scalars['Int']>;
};

/** Represents an update to a `KnowledgeBaseCategory`. Fields that are set will be updated. */
export type KnowledgeBaseCategoryPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['Int']>;
  isArchived?: InputMaybe<Scalars['Boolean']>;
  knowledgeBaseId?: InputMaybe<Scalars['Int']>;
  parentId?: InputMaybe<Scalars['Int']>;
  position?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

/** This returns an object that will provides information about the time a category will be published, updated or deleted */
export type KnowledgeBaseCategoryScheduleType = {
  __typename?: 'KnowledgeBaseCategoryScheduleType';
  created_at?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  knowledge_base_category_translation_id: Scalars['ID'];
  knowledge_base_id: Scalars['ID'];
  publish_update_delete?: Maybe<Scalars['String']>;
  run_at?: Maybe<Scalars['String']>;
};

/** This returns an object that provides the stats for a category */
export type KnowledgeBaseCategoryStatType = {
  __typename?: 'KnowledgeBaseCategoryStatType';
  level: Scalars['Int'];
  num_articles: Scalars['Int'];
  num_categories: Scalars['Int'];
};

export type KnowledgeBaseCategoryTranslation = Node & {
  __typename?: 'KnowledgeBaseCategoryTranslation';
  active?: Maybe<Scalars['Boolean']>;
  categoryIcon?: Maybe<Scalars['String']>;
  categoryId: Scalars['Int'];
  createdAt: Scalars['Datetime'];
  footer?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  isArchived: Scalars['Boolean'];
  isDeleteScheduled: Scalars['Boolean'];
  isUpdateScheduled: Scalars['Boolean'];
  kbLocaleId: Scalars['Int'];
  keywords?: Maybe<Scalars['String']>;
  knowledgeBaseId?: Maybe<Scalars['Int']>;
  listId?: Maybe<Scalars['Int']>;
  metaDescription?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  permission?: Maybe<Scalars['String']>;
  publishNow?: Maybe<Scalars['Boolean']>;
  titleTag?: Maybe<Scalars['String']>;
  uiColor?: Maybe<Scalars['String']>;
  updateMetadata?: Maybe<Scalars['String']>;
  updatedAt: Scalars['Datetime'];
};

/**
 * A condition to be used against `KnowledgeBaseCategoryTranslation` object types.
 * All fields are tested for equality and combined with a logical ‘and.’
 */
export type KnowledgeBaseCategoryTranslationCondition = {
  /** Checks for equality with the object’s `active` field. */
  active?: InputMaybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `categoryIcon` field. */
  categoryIcon?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `categoryId` field. */
  categoryId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `footer` field. */
  footer?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `isArchived` field. */
  isArchived?: InputMaybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `isDeleteScheduled` field. */
  isDeleteScheduled?: InputMaybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `isUpdateScheduled` field. */
  isUpdateScheduled?: InputMaybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `kbLocaleId` field. */
  kbLocaleId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `keywords` field. */
  keywords?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `knowledgeBaseId` field. */
  knowledgeBaseId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `listId` field. */
  listId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `metaDescription` field. */
  metaDescription?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `permission` field. */
  permission?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `publishNow` field. */
  publishNow?: InputMaybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `titleTag` field. */
  titleTag?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `uiColor` field. */
  uiColor?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `updateMetadata` field. */
  updateMetadata?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

/** An input for mutations affecting `KnowledgeBaseCategoryTranslation` */
export type KnowledgeBaseCategoryTranslationInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  categoryIcon?: InputMaybe<Scalars['String']>;
  categoryId: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['Datetime']>;
  footer?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  isArchived?: InputMaybe<Scalars['Boolean']>;
  isDeleteScheduled?: InputMaybe<Scalars['Boolean']>;
  isUpdateScheduled?: InputMaybe<Scalars['Boolean']>;
  kbLocaleId: Scalars['Int'];
  keywords?: InputMaybe<Scalars['String']>;
  knowledgeBaseId?: InputMaybe<Scalars['Int']>;
  listId?: InputMaybe<Scalars['Int']>;
  metaDescription?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  permission?: InputMaybe<Scalars['String']>;
  publishNow?: InputMaybe<Scalars['Boolean']>;
  titleTag?: InputMaybe<Scalars['String']>;
  uiColor?: InputMaybe<Scalars['String']>;
  updateMetadata?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

/** Represents an update to a `KnowledgeBaseCategoryTranslation`. Fields that are set will be updated. */
export type KnowledgeBaseCategoryTranslationPatch = {
  active?: InputMaybe<Scalars['Boolean']>;
  categoryIcon?: InputMaybe<Scalars['String']>;
  categoryId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  footer?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  isArchived?: InputMaybe<Scalars['Boolean']>;
  isDeleteScheduled?: InputMaybe<Scalars['Boolean']>;
  isUpdateScheduled?: InputMaybe<Scalars['Boolean']>;
  kbLocaleId?: InputMaybe<Scalars['Int']>;
  keywords?: InputMaybe<Scalars['String']>;
  knowledgeBaseId?: InputMaybe<Scalars['Int']>;
  listId?: InputMaybe<Scalars['Int']>;
  metaDescription?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permission?: InputMaybe<Scalars['String']>;
  publishNow?: InputMaybe<Scalars['Boolean']>;
  titleTag?: InputMaybe<Scalars['String']>;
  uiColor?: InputMaybe<Scalars['String']>;
  updateMetadata?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

/** This returns an object of the knowledge base category translation type */
export type KnowledgeBaseCategoryTranslationType = {
  __typename?: 'KnowledgeBaseCategoryTranslationType';
  active?: Maybe<Scalars['Boolean']>;
  category_icon?: Maybe<Scalars['String']>;
  category_id?: Maybe<Scalars['ID']>;
  created_at?: Maybe<Scalars['String']>;
  footer?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  is_archived?: Maybe<Scalars['Boolean']>;
  is_delete_scheduled?: Maybe<Scalars['Boolean']>;
  is_update_scheduled?: Maybe<Scalars['Boolean']>;
  kb_locale_id?: Maybe<Scalars['ID']>;
  keywords?: Maybe<Scalars['String']>;
  knowledge_base_id?: Maybe<Scalars['ID']>;
  list_id?: Maybe<Scalars['ID']>;
  meta_description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  permission?: Maybe<Scalars['String']>;
  publish_now?: Maybe<Scalars['Boolean']>;
  title_tag?: Maybe<Scalars['String']>;
  ui_color?: Maybe<Scalars['String']>;
  update_metadata?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
};

/** This is used to schedule a category for update */
export type KnowledgeBaseCategoryTranslationTypeInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  category_icon?: InputMaybe<Scalars['String']>;
  category_id?: InputMaybe<Scalars['ID']>;
  created_at?: InputMaybe<Scalars['String']>;
  footer?: InputMaybe<Scalars['String']>;
  kb_locale_id?: InputMaybe<Scalars['ID']>;
  keywords?: InputMaybe<Scalars['String']>;
  knowledge_base_id?: InputMaybe<Scalars['ID']>;
  list_id?: InputMaybe<Scalars['ID']>;
  meta_description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  parent_id?: InputMaybe<Scalars['ID']>;
  permission?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['Int']>;
  publish_now?: InputMaybe<Scalars['Boolean']>;
  schedule_at?: InputMaybe<Scalars['String']>;
  title_tag?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `KnowledgeBaseCategoryTranslation` values. */
export type KnowledgeBaseCategoryTranslationsConnection = {
  __typename?: 'KnowledgeBaseCategoryTranslationsConnection';
  /** A list of edges which contains the `KnowledgeBaseCategoryTranslation` and cursor to aid in pagination. */
  edges: Array<KnowledgeBaseCategoryTranslationsEdge>;
  /** A list of `KnowledgeBaseCategoryTranslation` objects. */
  nodes: Array<Maybe<KnowledgeBaseCategoryTranslation>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `KnowledgeBaseCategoryTranslation` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `KnowledgeBaseCategoryTranslation` edge in the connection. */
export type KnowledgeBaseCategoryTranslationsEdge = {
  __typename?: 'KnowledgeBaseCategoryTranslationsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `KnowledgeBaseCategoryTranslation` at the end of the edge. */
  node?: Maybe<KnowledgeBaseCategoryTranslation>;
};

/** Methods to use when ordering `KnowledgeBaseCategoryTranslation`. */
export enum KnowledgeBaseCategoryTranslationsOrderBy {
  ActiveAsc = 'ACTIVE_ASC',
  ActiveDesc = 'ACTIVE_DESC',
  CategoryIconAsc = 'CATEGORY_ICON_ASC',
  CategoryIconDesc = 'CATEGORY_ICON_DESC',
  CategoryIdAsc = 'CATEGORY_ID_ASC',
  CategoryIdDesc = 'CATEGORY_ID_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  FooterAsc = 'FOOTER_ASC',
  FooterDesc = 'FOOTER_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  IsArchivedAsc = 'IS_ARCHIVED_ASC',
  IsArchivedDesc = 'IS_ARCHIVED_DESC',
  IsDeleteScheduledAsc = 'IS_DELETE_SCHEDULED_ASC',
  IsDeleteScheduledDesc = 'IS_DELETE_SCHEDULED_DESC',
  IsUpdateScheduledAsc = 'IS_UPDATE_SCHEDULED_ASC',
  IsUpdateScheduledDesc = 'IS_UPDATE_SCHEDULED_DESC',
  KbLocaleIdAsc = 'KB_LOCALE_ID_ASC',
  KbLocaleIdDesc = 'KB_LOCALE_ID_DESC',
  KeywordsAsc = 'KEYWORDS_ASC',
  KeywordsDesc = 'KEYWORDS_DESC',
  KnowledgeBaseIdAsc = 'KNOWLEDGE_BASE_ID_ASC',
  KnowledgeBaseIdDesc = 'KNOWLEDGE_BASE_ID_DESC',
  ListIdAsc = 'LIST_ID_ASC',
  ListIdDesc = 'LIST_ID_DESC',
  MetaDescriptionAsc = 'META_DESCRIPTION_ASC',
  MetaDescriptionDesc = 'META_DESCRIPTION_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PermissionAsc = 'PERMISSION_ASC',
  PermissionDesc = 'PERMISSION_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  PublishNowAsc = 'PUBLISH_NOW_ASC',
  PublishNowDesc = 'PUBLISH_NOW_DESC',
  TitleTagAsc = 'TITLE_TAG_ASC',
  TitleTagDesc = 'TITLE_TAG_DESC',
  UiColorAsc = 'UI_COLOR_ASC',
  UiColorDesc = 'UI_COLOR_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  UpdateMetadataAsc = 'UPDATE_METADATA_ASC',
  UpdateMetadataDesc = 'UPDATE_METADATA_DESC'
}

/** This returns an object of the knowledge base category type */
export type KnowledgeBaseCategoryType = {
  __typename?: 'KnowledgeBaseCategoryType';
  created_at?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  is_archived?: Maybe<Scalars['Boolean']>;
  knowledge_base_id?: Maybe<Scalars['ID']>;
  parent_id?: Maybe<Scalars['ID']>;
  position?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['String']>;
};

/** An object that describes the status of a single category or article */
export type KnowledgeBaseLevelStatusDataType = {
  __typename?: 'KnowledgeBaseLevelStatusDataType';
  color?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  tooltip?: Maybe<Scalars['String']>;
};

/** An object that describes the status of categories and articles */
export type KnowledgeBaseLevelStatusHybridType = {
  __typename?: 'KnowledgeBaseLevelStatusHybridType';
  articles?: Maybe<KnowledgeBaseLevelStatusType>;
  categories?: Maybe<KnowledgeBaseLevelStatusType>;
};

/** An object that describes the status of a single category or article */
export type KnowledgeBaseLevelStatusType = {
  __typename?: 'KnowledgeBaseLevelStatusType';
  archived?: Maybe<KnowledgeBaseLevelStatusDataType>;
  count?: Maybe<Scalars['Int']>;
  draft?: Maybe<KnowledgeBaseLevelStatusDataType>;
  no_action?: Maybe<KnowledgeBaseLevelStatusDataType>;
  published?: Maybe<KnowledgeBaseLevelStatusDataType>;
  scheduled_to_archive?: Maybe<KnowledgeBaseLevelStatusDataType>;
  scheduled_to_publish?: Maybe<KnowledgeBaseLevelStatusDataType>;
  scheduled_to_update?: Maybe<KnowledgeBaseLevelStatusDataType>;
};

export type KnowledgeBaseList = Node & {
  __typename?: 'KnowledgeBaseList';
  createdAt: Scalars['Datetime'];
  id: Scalars['Int'];
  knowledgeBaseId: Scalars['Int'];
  listType: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  position: Scalars['Int'];
  title: Scalars['String'];
};

/**
 * A condition to be used against `KnowledgeBaseList` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type KnowledgeBaseListCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `knowledgeBaseId` field. */
  knowledgeBaseId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `listType` field. */
  listType?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `position` field. */
  position?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `title` field. */
  title?: InputMaybe<Scalars['String']>;
};

/** An input for mutations affecting `KnowledgeBaseList` */
export type KnowledgeBaseListInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['Int']>;
  knowledgeBaseId: Scalars['Int'];
  listType: Scalars['String'];
  position: Scalars['Int'];
  title: Scalars['String'];
};

/** Represents an update to a `KnowledgeBaseList`. Fields that are set will be updated. */
export type KnowledgeBaseListPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['Int']>;
  knowledgeBaseId?: InputMaybe<Scalars['Int']>;
  listType?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

/** This is used to return a list for the knowledge base */
export type KnowledgeBaseListType = {
  __typename?: 'KnowledgeBaseListType';
  created_at?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  knowledge_base_id: Scalars['ID'];
  list_type?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** A connection to a list of `KnowledgeBaseList` values. */
export type KnowledgeBaseListsConnection = {
  __typename?: 'KnowledgeBaseListsConnection';
  /** A list of edges which contains the `KnowledgeBaseList` and cursor to aid in pagination. */
  edges: Array<KnowledgeBaseListsEdge>;
  /** A list of `KnowledgeBaseList` objects. */
  nodes: Array<Maybe<KnowledgeBaseList>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `KnowledgeBaseList` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `KnowledgeBaseList` edge in the connection. */
export type KnowledgeBaseListsEdge = {
  __typename?: 'KnowledgeBaseListsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `KnowledgeBaseList` at the end of the edge. */
  node?: Maybe<KnowledgeBaseList>;
};

/** Methods to use when ordering `KnowledgeBaseList`. */
export enum KnowledgeBaseListsOrderBy {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  KnowledgeBaseIdAsc = 'KNOWLEDGE_BASE_ID_ASC',
  KnowledgeBaseIdDesc = 'KNOWLEDGE_BASE_ID_DESC',
  ListTypeAsc = 'LIST_TYPE_ASC',
  ListTypeDesc = 'LIST_TYPE_DESC',
  Natural = 'NATURAL',
  PositionAsc = 'POSITION_ASC',
  PositionDesc = 'POSITION_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}

export type KnowledgeBaseTranslation = Node & {
  __typename?: 'KnowledgeBaseTranslation';
  active?: Maybe<Scalars['Boolean']>;
  createdAt: Scalars['Datetime'];
  footerNote?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  isArchived: Scalars['Boolean'];
  kbLocaleId?: Maybe<Scalars['Int']>;
  knowledgeBaseId: Scalars['Int'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  position?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  uiColor?: Maybe<Scalars['String']>;
  updatedAt: Scalars['Datetime'];
};

/**
 * A condition to be used against `KnowledgeBaseTranslation` object types. All
 * fields are tested for equality and combined with a logical ‘and.’
 */
export type KnowledgeBaseTranslationCondition = {
  /** Checks for equality with the object’s `active` field. */
  active?: InputMaybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `footerNote` field. */
  footerNote?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `isArchived` field. */
  isArchived?: InputMaybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `kbLocaleId` field. */
  kbLocaleId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `knowledgeBaseId` field. */
  knowledgeBaseId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `position` field. */
  position?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `title` field. */
  title?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `uiColor` field. */
  uiColor?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

/** An input for mutations affecting `KnowledgeBaseTranslation` */
export type KnowledgeBaseTranslationInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  footerNote?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  isArchived?: InputMaybe<Scalars['Boolean']>;
  kbLocaleId?: InputMaybe<Scalars['Int']>;
  knowledgeBaseId: Scalars['Int'];
  position?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  uiColor?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

/** Represents an update to a `KnowledgeBaseTranslation`. Fields that are set will be updated. */
export type KnowledgeBaseTranslationPatch = {
  active?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  footerNote?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  isArchived?: InputMaybe<Scalars['Boolean']>;
  kbLocaleId?: InputMaybe<Scalars['Int']>;
  knowledgeBaseId?: InputMaybe<Scalars['Int']>;
  position?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  uiColor?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

/** A connection to a list of `KnowledgeBaseTranslation` values. */
export type KnowledgeBaseTranslationsConnection = {
  __typename?: 'KnowledgeBaseTranslationsConnection';
  /** A list of edges which contains the `KnowledgeBaseTranslation` and cursor to aid in pagination. */
  edges: Array<KnowledgeBaseTranslationsEdge>;
  /** A list of `KnowledgeBaseTranslation` objects. */
  nodes: Array<Maybe<KnowledgeBaseTranslation>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `KnowledgeBaseTranslation` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `KnowledgeBaseTranslation` edge in the connection. */
export type KnowledgeBaseTranslationsEdge = {
  __typename?: 'KnowledgeBaseTranslationsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `KnowledgeBaseTranslation` at the end of the edge. */
  node?: Maybe<KnowledgeBaseTranslation>;
};

/** Methods to use when ordering `KnowledgeBaseTranslation`. */
export enum KnowledgeBaseTranslationsOrderBy {
  ActiveAsc = 'ACTIVE_ASC',
  ActiveDesc = 'ACTIVE_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  FooterNoteAsc = 'FOOTER_NOTE_ASC',
  FooterNoteDesc = 'FOOTER_NOTE_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  IsArchivedAsc = 'IS_ARCHIVED_ASC',
  IsArchivedDesc = 'IS_ARCHIVED_DESC',
  KbLocaleIdAsc = 'KB_LOCALE_ID_ASC',
  KbLocaleIdDesc = 'KB_LOCALE_ID_DESC',
  KnowledgeBaseIdAsc = 'KNOWLEDGE_BASE_ID_ASC',
  KnowledgeBaseIdDesc = 'KNOWLEDGE_BASE_ID_DESC',
  Natural = 'NATURAL',
  PositionAsc = 'POSITION_ASC',
  PositionDesc = 'POSITION_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  UiColorAsc = 'UI_COLOR_ASC',
  UiColorDesc = 'UI_COLOR_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC'
}

/** A connection to a list of `KnowledgeBasis` values. */
export type KnowledgeBasesConnection = {
  __typename?: 'KnowledgeBasesConnection';
  /** A list of edges which contains the `KnowledgeBasis` and cursor to aid in pagination. */
  edges: Array<KnowledgeBasesEdge>;
  /** A list of `KnowledgeBasis` objects. */
  nodes: Array<Maybe<KnowledgeBasis>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `KnowledgeBasis` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `KnowledgeBasis` edge in the connection. */
export type KnowledgeBasesEdge = {
  __typename?: 'KnowledgeBasesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `KnowledgeBasis` at the end of the edge. */
  node?: Maybe<KnowledgeBasis>;
};

/** Methods to use when ordering `KnowledgeBasis`. */
export enum KnowledgeBasesOrderBy {
  ActiveAsc = 'ACTIVE_ASC',
  ActiveDesc = 'ACTIVE_DESC',
  CategoryLayoutAsc = 'CATEGORY_LAYOUT_ASC',
  CategoryLayoutDesc = 'CATEGORY_LAYOUT_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  FooterAsc = 'FOOTER_ASC',
  FooterDesc = 'FOOTER_DESC',
  FrontPageAsc = 'FRONT_PAGE_ASC',
  FrontPageDesc = 'FRONT_PAGE_DESC',
  HomepageLayoutAsc = 'HOMEPAGE_LAYOUT_ASC',
  HomepageLayoutDesc = 'HOMEPAGE_LAYOUT_DESC',
  IconAsc = 'ICON_ASC',
  IconDesc = 'ICON_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  IsArchivedAsc = 'IS_ARCHIVED_ASC',
  IsArchivedDesc = 'IS_ARCHIVED_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PositionAsc = 'POSITION_ASC',
  PositionDesc = 'POSITION_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UiColorAsc = 'UI_COLOR_ASC',
  UiColorDesc = 'UI_COLOR_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC'
}

export type KnowledgeBasis = Node & {
  __typename?: 'KnowledgeBasis';
  active?: Maybe<Scalars['Boolean']>;
  categoryLayout?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  footer?: Maybe<Scalars['String']>;
  frontPage?: Maybe<Scalars['String']>;
  homepageLayout?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  isArchived: Scalars['Boolean'];
  name: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  position: Scalars['Int'];
  uiColor?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
};

/**
 * A condition to be used against `KnowledgeBasis` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type KnowledgeBasisCondition = {
  /** Checks for equality with the object’s `active` field. */
  active?: InputMaybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `categoryLayout` field. */
  categoryLayout?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `footer` field. */
  footer?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `frontPage` field. */
  frontPage?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `homepageLayout` field. */
  homepageLayout?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `icon` field. */
  icon?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `isArchived` field. */
  isArchived?: InputMaybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `position` field. */
  position?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `uiColor` field. */
  uiColor?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

/** An input for mutations affecting `KnowledgeBasis` */
export type KnowledgeBasisInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  categoryLayout?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  footer?: InputMaybe<Scalars['String']>;
  frontPage?: InputMaybe<Scalars['String']>;
  homepageLayout?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  isArchived?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  position?: InputMaybe<Scalars['Int']>;
  uiColor?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

/** Represents an update to a `KnowledgeBasis`. Fields that are set will be updated. */
export type KnowledgeBasisPatch = {
  active?: InputMaybe<Scalars['Boolean']>;
  categoryLayout?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  footer?: InputMaybe<Scalars['String']>;
  frontPage?: InputMaybe<Scalars['String']>;
  homepageLayout?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  isArchived?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['Int']>;
  uiColor?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

/** Knowledgebases are used to store categories, subcategories and articles, seperated by levels with the max level at 5 */
export type Knowledgebase = {
  __typename?: 'Knowledgebase';
  active?: Maybe<Scalars['Boolean']>;
  category_layout?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['String']>;
  footer?: Maybe<Scalars['String']>;
  front_page?: Maybe<Scalars['String']>;
  homepage_layout?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  is_archived?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  tooltip?: Maybe<Scalars['String']>;
  ui_color?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
};

/** An object which is used when creating a knowledge base */
export type KnowledgebaseCreateLocale = {
  default?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
};

/** This holds the status color for the translations of a knowledge base category */
export type KnowledgebaseTranslationStatusColor = {
  __typename?: 'KnowledgebaseTranslationStatusColor';
  default?: Maybe<Scalars['Boolean']>;
  kb_locale_id: Scalars['ID'];
  knowledge_base_translation_id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  tooltip?: Maybe<Scalars['String']>;
  ui_color?: Maybe<Scalars['String']>;
};

/** This holds the translations for a knowledge base */
export type KnowledgebaseTranslationType = {
  __typename?: 'KnowledgebaseTranslationType';
  active?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['String']>;
  footer_note?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  is_archived?: Maybe<Scalars['Boolean']>;
  kb_locale_id?: Maybe<Scalars['ID']>;
  knowledge_base_id?: Maybe<Scalars['ID']>;
  position?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  tooltip?: Maybe<Scalars['String']>;
  ui_color?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
};

export type Locale = Node & {
  __typename?: 'Locale';
  active: Scalars['Boolean'];
  alias?: Maybe<Scalars['String']>;
  createdAt: Scalars['Datetime'];
  dir: Scalars['String'];
  id: Scalars['Int'];
  locale: Scalars['String'];
  name: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  updatedAt: Scalars['Datetime'];
};

/** A condition to be used against `Locale` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type LocaleCondition = {
  /** Checks for equality with the object’s `active` field. */
  active?: InputMaybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `alias` field. */
  alias?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `dir` field. */
  dir?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `locale` field. */
  locale?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

/** An input for mutations affecting `Locale` */
export type LocaleInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  alias?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  dir?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  locale: Scalars['String'];
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

/** Represents an update to a `Locale`. Fields that are set will be updated. */
export type LocalePatch = {
  active?: InputMaybe<Scalars['Boolean']>;
  alias?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  dir?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

/** A connection to a list of `Locale` values. */
export type LocalesConnection = {
  __typename?: 'LocalesConnection';
  /** A list of edges which contains the `Locale` and cursor to aid in pagination. */
  edges: Array<LocalesEdge>;
  /** A list of `Locale` objects. */
  nodes: Array<Maybe<Locale>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Locale` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Locale` edge in the connection. */
export type LocalesEdge = {
  __typename?: 'LocalesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Locale` at the end of the edge. */
  node?: Maybe<Locale>;
};

/** Methods to use when ordering `Locale`. */
export enum LocalesOrderBy {
  ActiveAsc = 'ACTIVE_ASC',
  ActiveDesc = 'ACTIVE_DESC',
  AliasAsc = 'ALIAS_ASC',
  AliasDesc = 'ALIAS_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  DirAsc = 'DIR_ASC',
  DirDesc = 'DIR_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  LocaleAsc = 'LOCALE_ASC',
  LocaleDesc = 'LOCALE_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC'
}

/** Root Mutation */
export type Mutation = {
  __typename?: 'Mutation';
  /** Archives an article with its translations */
  archiveKnowledgeBaseArticle_?: Maybe<Response>;
  /** Archives a category with its subcategories and translations */
  archiveKnowledgeBaseCategory_?: Maybe<Response>;
  /** Creates a single `ActivityStream`. */
  createActivityStream?: Maybe<CreateActivityStreamPayload>;
  /** Creates a single `KnowledgeBaseArticle`. */
  createKnowledgeBaseArticle?: Maybe<CreateKnowledgeBaseArticlePayload>;
  /** Creates a single `KnowledgeBaseArticleDelayedJob`. */
  createKnowledgeBaseArticleDelayedJob?: Maybe<CreateKnowledgeBaseArticleDelayedJobPayload>;
  /** Creates a single `KnowledgeBaseArticleTranslation`. */
  createKnowledgeBaseArticleTranslation?: Maybe<CreateKnowledgeBaseArticleTranslationPayload>;
  /** Creates a knowledgebase article */
  createKnowledgeBaseArticle_?: Maybe<Response>;
  /** Creates a single `KnowledgeBaseCategory`. */
  createKnowledgeBaseCategory?: Maybe<CreateKnowledgeBaseCategoryPayload>;
  /** Creates a single `KnowledgeBaseCategoryDelayedJob`. */
  createKnowledgeBaseCategoryDelayedJob?: Maybe<CreateKnowledgeBaseCategoryDelayedJobPayload>;
  /** Creates a single `KnowledgeBaseCategoryTranslation`. */
  createKnowledgeBaseCategoryTranslation?: Maybe<CreateKnowledgeBaseCategoryTranslationPayload>;
  /** Creates a knowledgebase category */
  createKnowledgeBaseCategory_?: Maybe<Response>;
  /** Creates a single `KnowledgeBaseList`. */
  createKnowledgeBaseList?: Maybe<CreateKnowledgeBaseListPayload>;
  /** Creates a single `KnowledgeBaseTranslation`. */
  createKnowledgeBaseTranslation?: Maybe<CreateKnowledgeBaseTranslationPayload>;
  /** Creates a single `KnowledgeBasis`. */
  createKnowledgeBasis?: Maybe<CreateKnowledgeBasisPayload>;
  /** Creates a new knowledgebase */
  createKnowledgebase_?: Maybe<Response>;
  /** Creates a single `Locale`. */
  createLocale?: Maybe<CreateLocalePayload>;
  /**
   * This can only be done by the logged in user.
   *
   * Equivalent to POST /user
   */
  createUser?: Maybe<Scalars['JSON']>;
  /**
   * Creates list of users with given input array
   *
   * Equivalent to POST /user/createWithArray
   */
  createUsersWithArrayInput?: Maybe<Scalars['JSON']>;
  /**
   * Creates list of users with given input array
   *
   * Equivalent to POST /user/createWithList
   */
  createUsersWithListInput?: Maybe<Scalars['JSON']>;
  /** Deletes a single `ActivityStream` using its globally unique id. */
  deleteActivityStream?: Maybe<DeleteActivityStreamPayload>;
  /** Deletes a single `ActivityStream` using a unique key. */
  deleteActivityStreamById?: Maybe<DeleteActivityStreamPayload>;
  /** Deletes a single `KnowledgeBaseArticle` using its globally unique id. */
  deleteKnowledgeBaseArticle?: Maybe<DeleteKnowledgeBaseArticlePayload>;
  /** Deletes a single `KnowledgeBaseArticle` using a unique key. */
  deleteKnowledgeBaseArticleById?: Maybe<DeleteKnowledgeBaseArticlePayload>;
  /** Deletes a single `KnowledgeBaseArticleDelayedJob` using its globally unique id. */
  deleteKnowledgeBaseArticleDelayedJob?: Maybe<DeleteKnowledgeBaseArticleDelayedJobPayload>;
  /** Deletes a single `KnowledgeBaseArticleDelayedJob` using a unique key. */
  deleteKnowledgeBaseArticleDelayedJobById?: Maybe<DeleteKnowledgeBaseArticleDelayedJobPayload>;
  /** Deletes a single `KnowledgeBaseArticleTranslation` using its globally unique id. */
  deleteKnowledgeBaseArticleTranslation?: Maybe<DeleteKnowledgeBaseArticleTranslationPayload>;
  /** Deletes a single `KnowledgeBaseArticleTranslation` using a unique key. */
  deleteKnowledgeBaseArticleTranslationById?: Maybe<DeleteKnowledgeBaseArticleTranslationPayload>;
  /** Deletes a single `KnowledgeBaseCategory` using its globally unique id. */
  deleteKnowledgeBaseCategory?: Maybe<DeleteKnowledgeBaseCategoryPayload>;
  /** Deletes a single `KnowledgeBaseCategory` using a unique key. */
  deleteKnowledgeBaseCategoryById?: Maybe<DeleteKnowledgeBaseCategoryPayload>;
  /** Deletes a single `KnowledgeBaseCategoryDelayedJob` using its globally unique id. */
  deleteKnowledgeBaseCategoryDelayedJob?: Maybe<DeleteKnowledgeBaseCategoryDelayedJobPayload>;
  /** Deletes a single `KnowledgeBaseCategoryDelayedJob` using a unique key. */
  deleteKnowledgeBaseCategoryDelayedJobById?: Maybe<DeleteKnowledgeBaseCategoryDelayedJobPayload>;
  /** Deletes a single `KnowledgeBaseCategoryTranslation` using its globally unique id. */
  deleteKnowledgeBaseCategoryTranslation?: Maybe<DeleteKnowledgeBaseCategoryTranslationPayload>;
  /** Deletes a single `KnowledgeBaseCategoryTranslation` using a unique key. */
  deleteKnowledgeBaseCategoryTranslationById?: Maybe<DeleteKnowledgeBaseCategoryTranslationPayload>;
  /** Deletes a single `KnowledgeBaseList` using its globally unique id. */
  deleteKnowledgeBaseList?: Maybe<DeleteKnowledgeBaseListPayload>;
  /** Deletes a single `KnowledgeBaseList` using a unique key. */
  deleteKnowledgeBaseListById?: Maybe<DeleteKnowledgeBaseListPayload>;
  /** Deletes a single `KnowledgeBaseTranslation` using its globally unique id. */
  deleteKnowledgeBaseTranslation?: Maybe<DeleteKnowledgeBaseTranslationPayload>;
  /** Deletes a single `KnowledgeBaseTranslation` using a unique key. */
  deleteKnowledgeBaseTranslationById?: Maybe<DeleteKnowledgeBaseTranslationPayload>;
  /** Deletes a single `KnowledgeBasis` using its globally unique id. */
  deleteKnowledgeBasis?: Maybe<DeleteKnowledgeBasisPayload>;
  /** Deletes a single `KnowledgeBasis` using a unique key. */
  deleteKnowledgeBasisById?: Maybe<DeleteKnowledgeBasisPayload>;
  /** Deletes a single `Locale` using its globally unique id. */
  deleteLocale?: Maybe<DeleteLocalePayload>;
  /** Deletes a single `Locale` using a unique key. */
  deleteLocaleById?: Maybe<DeleteLocalePayload>;
  /** Imports a knowledgebase */
  importKnowledgebase_?: Maybe<Scalars['Boolean']>;
  /**
   * Place an order for a pet
   *
   * Equivalent to POST /store/order
   */
  placeOrder?: Maybe<Order>;
  /** Reorder the knowledgebase article positions */
  rearrangeKnowledgebaseArticlePositions_?: Maybe<Response>;
  /** Reorder the knowledgebase category positions */
  rearrangeKnowledgebaseCategoryPositions_?: Maybe<Response>;
  /** Reorder the knowledgebase positions */
  rearrangeKnowledgebasePositions_?: Maybe<Response>;
  /** Removes the schedule for an article either update or delete */
  removeScheduleForKnowledgeBaseArticle_?: Maybe<Response>;
  /** Removes a category from being scheduled for deletion, update or publication */
  removeScheduleForKnowledgebaseCategory_?: Maybe<Response>;
  /** Schedules an article for update */
  scheduleKnowledgeBaseArticleUpdate_?: Maybe<Response>;
  /** Schedules a category for update */
  scheduleKnowledgeBaseCategoryUpdate_?: Maybe<Response>;
  /** Schedules an article for deletion */
  scheduleKnowledgebaseArticleDelete_?: Maybe<Response>;
  /** Schedules a category for deletion */
  scheduleKnowledgebaseCategoryDelete_?: Maybe<Response>;
  /** Reinstates an article with its translations */
  unarchiveKnowledgeBaseArticle_?: Maybe<Response>;
  /** Reinstates a category with its subcategories and translations */
  unarchiveKnowledgeBaseCategory_?: Maybe<Response>;
  /** Updates a single `ActivityStream` using its globally unique id and a patch. */
  updateActivityStream?: Maybe<UpdateActivityStreamPayload>;
  /** Updates a single `ActivityStream` using a unique key and a patch. */
  updateActivityStreamById?: Maybe<UpdateActivityStreamPayload>;
  /** Updates a single `KnowledgeBaseArticle` using its globally unique id and a patch. */
  updateKnowledgeBaseArticle?: Maybe<UpdateKnowledgeBaseArticlePayload>;
  /** Updates a single `KnowledgeBaseArticle` using a unique key and a patch. */
  updateKnowledgeBaseArticleById?: Maybe<UpdateKnowledgeBaseArticlePayload>;
  /** Updates a single `KnowledgeBaseArticleDelayedJob` using its globally unique id and a patch. */
  updateKnowledgeBaseArticleDelayedJob?: Maybe<UpdateKnowledgeBaseArticleDelayedJobPayload>;
  /** Updates a single `KnowledgeBaseArticleDelayedJob` using a unique key and a patch. */
  updateKnowledgeBaseArticleDelayedJobById?: Maybe<UpdateKnowledgeBaseArticleDelayedJobPayload>;
  /** Updates a single `KnowledgeBaseArticleTranslation` using its globally unique id and a patch. */
  updateKnowledgeBaseArticleTranslation?: Maybe<UpdateKnowledgeBaseArticleTranslationPayload>;
  /** Updates a single `KnowledgeBaseArticleTranslation` using a unique key and a patch. */
  updateKnowledgeBaseArticleTranslationById?: Maybe<UpdateKnowledgeBaseArticleTranslationPayload>;
  /** Updates a knowledgebase article */
  updateKnowledgeBaseArticle_?: Maybe<Response>;
  /** Updates a single `KnowledgeBaseCategory` using its globally unique id and a patch. */
  updateKnowledgeBaseCategory?: Maybe<UpdateKnowledgeBaseCategoryPayload>;
  /** Updates a single `KnowledgeBaseCategory` using a unique key and a patch. */
  updateKnowledgeBaseCategoryById?: Maybe<UpdateKnowledgeBaseCategoryPayload>;
  /** Updates a single `KnowledgeBaseCategoryDelayedJob` using its globally unique id and a patch. */
  updateKnowledgeBaseCategoryDelayedJob?: Maybe<UpdateKnowledgeBaseCategoryDelayedJobPayload>;
  /** Updates a single `KnowledgeBaseCategoryDelayedJob` using a unique key and a patch. */
  updateKnowledgeBaseCategoryDelayedJobById?: Maybe<UpdateKnowledgeBaseCategoryDelayedJobPayload>;
  /** Updates a single `KnowledgeBaseCategoryTranslation` using its globally unique id and a patch. */
  updateKnowledgeBaseCategoryTranslation?: Maybe<UpdateKnowledgeBaseCategoryTranslationPayload>;
  /** Updates a single `KnowledgeBaseCategoryTranslation` using a unique key and a patch. */
  updateKnowledgeBaseCategoryTranslationById?: Maybe<UpdateKnowledgeBaseCategoryTranslationPayload>;
  /** Updates a knowledgebase category */
  updateKnowledgeBaseCategory_?: Maybe<Response>;
  /** Updates a single `KnowledgeBaseList` using its globally unique id and a patch. */
  updateKnowledgeBaseList?: Maybe<UpdateKnowledgeBaseListPayload>;
  /** Updates a single `KnowledgeBaseList` using a unique key and a patch. */
  updateKnowledgeBaseListById?: Maybe<UpdateKnowledgeBaseListPayload>;
  /** Updates a single `KnowledgeBaseTranslation` using its globally unique id and a patch. */
  updateKnowledgeBaseTranslation?: Maybe<UpdateKnowledgeBaseTranslationPayload>;
  /** Updates a single `KnowledgeBaseTranslation` using a unique key and a patch. */
  updateKnowledgeBaseTranslationById?: Maybe<UpdateKnowledgeBaseTranslationPayload>;
  /** Updates a single `KnowledgeBasis` using its globally unique id and a patch. */
  updateKnowledgeBasis?: Maybe<UpdateKnowledgeBasisPayload>;
  /** Updates a single `KnowledgeBasis` using a unique key and a patch. */
  updateKnowledgeBasisById?: Maybe<UpdateKnowledgeBasisPayload>;
  /** Updates a knowledgebase */
  updateKnowledgebase_?: Maybe<Response>;
  /** Updates a single `Locale` using its globally unique id and a patch. */
  updateLocale?: Maybe<UpdateLocalePayload>;
  /** Updates a single `Locale` using a unique key and a patch. */
  updateLocaleById?: Maybe<UpdateLocalePayload>;
  /**
   * uploads an image
   *
   * Equivalent to POST /pet/{petId}/uploadImage
   */
  uploadFile?: Maybe<ApiResponse>;
};


/** Root Mutation */
export type MutationArchiveKnowledgeBaseArticle_Args = {
  category_id: Scalars['ID'];
};


/** Root Mutation */
export type MutationArchiveKnowledgeBaseCategory_Args = {
  category_id: Scalars['ID'];
};


/** Root Mutation */
export type MutationCreateActivityStreamArgs = {
  input: CreateActivityStreamInput;
};


/** Root Mutation */
export type MutationCreateKnowledgeBaseArticleArgs = {
  input: CreateKnowledgeBaseArticleInput;
};


/** Root Mutation */
export type MutationCreateKnowledgeBaseArticleDelayedJobArgs = {
  input: CreateKnowledgeBaseArticleDelayedJobInput;
};


/** Root Mutation */
export type MutationCreateKnowledgeBaseArticleTranslationArgs = {
  input: CreateKnowledgeBaseArticleTranslationInput;
};


/** Root Mutation */
export type MutationCreateKnowledgeBaseArticle_Args = {
  active: Scalars['Boolean'];
  article_id?: InputMaybe<Scalars['ID']>;
  body?: InputMaybe<Scalars['String']>;
  category_id: Scalars['ID'];
  created_at?: InputMaybe<Scalars['String']>;
  kb_locale_id: Scalars['ID'];
  keywords?: InputMaybe<Scalars['String']>;
  knowledge_base_id: Scalars['ID'];
  list_id?: InputMaybe<Scalars['Int']>;
  meta_description?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['Int']>;
  publish_now: Scalars['Boolean'];
  schedule_at?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  title_tag?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['String']>;
};


/** Root Mutation */
export type MutationCreateKnowledgeBaseCategoryArgs = {
  input: CreateKnowledgeBaseCategoryInput;
};


/** Root Mutation */
export type MutationCreateKnowledgeBaseCategoryDelayedJobArgs = {
  input: CreateKnowledgeBaseCategoryDelayedJobInput;
};


/** Root Mutation */
export type MutationCreateKnowledgeBaseCategoryTranslationArgs = {
  input: CreateKnowledgeBaseCategoryTranslationInput;
};


/** Root Mutation */
export type MutationCreateKnowledgeBaseCategory_Args = {
  active: Scalars['Boolean'];
  category_icon?: InputMaybe<Scalars['String']>;
  category_id: Scalars['ID'];
  created_at?: InputMaybe<Scalars['String']>;
  footer?: InputMaybe<Scalars['String']>;
  kb_locale_id: Scalars['ID'];
  keywords?: InputMaybe<Scalars['String']>;
  knowledge_base_id: Scalars['ID'];
  list_id?: InputMaybe<Scalars['Int']>;
  meta_description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  parent_id: Scalars['ID'];
  permission?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['Int']>;
  publish_now: Scalars['Boolean'];
  schedule_at?: InputMaybe<Scalars['String']>;
  title_tag?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['String']>;
};


/** Root Mutation */
export type MutationCreateKnowledgeBaseListArgs = {
  input: CreateKnowledgeBaseListInput;
};


/** Root Mutation */
export type MutationCreateKnowledgeBaseTranslationArgs = {
  input: CreateKnowledgeBaseTranslationInput;
};


/** Root Mutation */
export type MutationCreateKnowledgeBasisArgs = {
  input: CreateKnowledgeBasisInput;
};


/** Root Mutation */
export type MutationCreateKnowledgebase_Args = {
  active: Scalars['Boolean'];
  category_layout: Scalars['String'];
  footer: Scalars['String'];
  front_page: Scalars['String'];
  homepage_layout: Scalars['String'];
  icon: Scalars['String'];
  kb_locale_ids: Array<InputMaybe<KnowledgebaseCreateLocale>>;
  name: Scalars['String'];
};


/** Root Mutation */
export type MutationCreateLocaleArgs = {
  input: CreateLocaleInput;
};


/** Root Mutation */
export type MutationCreateUserArgs = {
  userInput: UserInput;
};


/** Root Mutation */
export type MutationCreateUsersWithArrayInputArgs = {
  userCreateWithArrayInput: Array<InputMaybe<UserInput>>;
};


/** Root Mutation */
export type MutationCreateUsersWithListInputArgs = {
  userCreateWithListInput: Array<InputMaybe<UserInput>>;
};


/** Root Mutation */
export type MutationDeleteActivityStreamArgs = {
  input: DeleteActivityStreamInput;
};


/** Root Mutation */
export type MutationDeleteActivityStreamByIdArgs = {
  input: DeleteActivityStreamByIdInput;
};


/** Root Mutation */
export type MutationDeleteKnowledgeBaseArticleArgs = {
  input: DeleteKnowledgeBaseArticleInput;
};


/** Root Mutation */
export type MutationDeleteKnowledgeBaseArticleByIdArgs = {
  input: DeleteKnowledgeBaseArticleByIdInput;
};


/** Root Mutation */
export type MutationDeleteKnowledgeBaseArticleDelayedJobArgs = {
  input: DeleteKnowledgeBaseArticleDelayedJobInput;
};


/** Root Mutation */
export type MutationDeleteKnowledgeBaseArticleDelayedJobByIdArgs = {
  input: DeleteKnowledgeBaseArticleDelayedJobByIdInput;
};


/** Root Mutation */
export type MutationDeleteKnowledgeBaseArticleTranslationArgs = {
  input: DeleteKnowledgeBaseArticleTranslationInput;
};


/** Root Mutation */
export type MutationDeleteKnowledgeBaseArticleTranslationByIdArgs = {
  input: DeleteKnowledgeBaseArticleTranslationByIdInput;
};


/** Root Mutation */
export type MutationDeleteKnowledgeBaseCategoryArgs = {
  input: DeleteKnowledgeBaseCategoryInput;
};


/** Root Mutation */
export type MutationDeleteKnowledgeBaseCategoryByIdArgs = {
  input: DeleteKnowledgeBaseCategoryByIdInput;
};


/** Root Mutation */
export type MutationDeleteKnowledgeBaseCategoryDelayedJobArgs = {
  input: DeleteKnowledgeBaseCategoryDelayedJobInput;
};


/** Root Mutation */
export type MutationDeleteKnowledgeBaseCategoryDelayedJobByIdArgs = {
  input: DeleteKnowledgeBaseCategoryDelayedJobByIdInput;
};


/** Root Mutation */
export type MutationDeleteKnowledgeBaseCategoryTranslationArgs = {
  input: DeleteKnowledgeBaseCategoryTranslationInput;
};


/** Root Mutation */
export type MutationDeleteKnowledgeBaseCategoryTranslationByIdArgs = {
  input: DeleteKnowledgeBaseCategoryTranslationByIdInput;
};


/** Root Mutation */
export type MutationDeleteKnowledgeBaseListArgs = {
  input: DeleteKnowledgeBaseListInput;
};


/** Root Mutation */
export type MutationDeleteKnowledgeBaseListByIdArgs = {
  input: DeleteKnowledgeBaseListByIdInput;
};


/** Root Mutation */
export type MutationDeleteKnowledgeBaseTranslationArgs = {
  input: DeleteKnowledgeBaseTranslationInput;
};


/** Root Mutation */
export type MutationDeleteKnowledgeBaseTranslationByIdArgs = {
  input: DeleteKnowledgeBaseTranslationByIdInput;
};


/** Root Mutation */
export type MutationDeleteKnowledgeBasisArgs = {
  input: DeleteKnowledgeBasisInput;
};


/** Root Mutation */
export type MutationDeleteKnowledgeBasisByIdArgs = {
  input: DeleteKnowledgeBasisByIdInput;
};


/** Root Mutation */
export type MutationDeleteLocaleArgs = {
  input: DeleteLocaleInput;
};


/** Root Mutation */
export type MutationDeleteLocaleByIdArgs = {
  input: DeleteLocaleByIdInput;
};


/** Root Mutation */
export type MutationImportKnowledgebase_Args = {
  image?: InputMaybe<Scalars['Upload']>;
};


/** Root Mutation */
export type MutationPlaceOrderArgs = {
  orderInput: OrderInput;
};


/** Root Mutation */
export type MutationRearrangeKnowledgebaseArticlePositions_Args = {
  article_ids: Array<InputMaybe<Scalars['Int']>>;
};


/** Root Mutation */
export type MutationRearrangeKnowledgebaseCategoryPositions_Args = {
  category_ids: Array<InputMaybe<Scalars['Int']>>;
};


/** Root Mutation */
export type MutationRearrangeKnowledgebasePositions_Args = {
  knowledge_base_ids: Array<InputMaybe<Scalars['Int']>>;
};


/** Root Mutation */
export type MutationRemoveScheduleForKnowledgeBaseArticle_Args = {
  knowledge_base_article_translation_id: Scalars['ID'];
  schedule_type: Scalars['String'];
};


/** Root Mutation */
export type MutationRemoveScheduleForKnowledgebaseCategory_Args = {
  knowledge_base_category_translation_id: Scalars['ID'];
  schedule_type: Scalars['String'];
};


/** Root Mutation */
export type MutationScheduleKnowledgeBaseArticleUpdate_Args = {
  article_id: Scalars['ID'];
  knowledge_base_article_translation_id: Scalars['ID'];
  knowledge_base_id: Scalars['ID'];
  run_at?: InputMaybe<Scalars['String']>;
  update_metadata: KnowledgeBaseArticleTranslationTypeInput;
};


/** Root Mutation */
export type MutationScheduleKnowledgeBaseCategoryUpdate_Args = {
  knowledge_base_category_translation_id: Scalars['ID'];
  knowledge_base_id: Scalars['ID'];
  run_at?: InputMaybe<Scalars['String']>;
  update_metadata: KnowledgeBaseCategoryTranslationTypeInput;
};


/** Root Mutation */
export type MutationScheduleKnowledgebaseArticleDelete_Args = {
  article_id: Scalars['ID'];
  knowledge_base_article_translation_id: Scalars['ID'];
  knowledge_base_id: Scalars['ID'];
  run_at: Scalars['String'];
};


/** Root Mutation */
export type MutationScheduleKnowledgebaseCategoryDelete_Args = {
  knowledge_base_category_translation_id: Scalars['ID'];
  knowledge_base_id: Scalars['ID'];
  run_at: Scalars['String'];
};


/** Root Mutation */
export type MutationUnarchiveKnowledgeBaseArticle_Args = {
  category_id: Scalars['ID'];
};


/** Root Mutation */
export type MutationUnarchiveKnowledgeBaseCategory_Args = {
  category_id: Scalars['ID'];
};


/** Root Mutation */
export type MutationUpdateActivityStreamArgs = {
  input: UpdateActivityStreamInput;
};


/** Root Mutation */
export type MutationUpdateActivityStreamByIdArgs = {
  input: UpdateActivityStreamByIdInput;
};


/** Root Mutation */
export type MutationUpdateKnowledgeBaseArticleArgs = {
  input: UpdateKnowledgeBaseArticleInput;
};


/** Root Mutation */
export type MutationUpdateKnowledgeBaseArticleByIdArgs = {
  input: UpdateKnowledgeBaseArticleByIdInput;
};


/** Root Mutation */
export type MutationUpdateKnowledgeBaseArticleDelayedJobArgs = {
  input: UpdateKnowledgeBaseArticleDelayedJobInput;
};


/** Root Mutation */
export type MutationUpdateKnowledgeBaseArticleDelayedJobByIdArgs = {
  input: UpdateKnowledgeBaseArticleDelayedJobByIdInput;
};


/** Root Mutation */
export type MutationUpdateKnowledgeBaseArticleTranslationArgs = {
  input: UpdateKnowledgeBaseArticleTranslationInput;
};


/** Root Mutation */
export type MutationUpdateKnowledgeBaseArticleTranslationByIdArgs = {
  input: UpdateKnowledgeBaseArticleTranslationByIdInput;
};


/** Root Mutation */
export type MutationUpdateKnowledgeBaseArticle_Args = {
  active: Scalars['Boolean'];
  article_id: Scalars['ID'];
  body?: InputMaybe<Scalars['String']>;
  category_id: Scalars['ID'];
  created_at?: InputMaybe<Scalars['String']>;
  kb_locale_id: Scalars['ID'];
  keywords?: InputMaybe<Scalars['String']>;
  knowledge_base_id: Scalars['ID'];
  list_id?: InputMaybe<Scalars['Int']>;
  meta_description?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['Int']>;
  publish_now: Scalars['Boolean'];
  schedule_at?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  title_tag?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['String']>;
};


/** Root Mutation */
export type MutationUpdateKnowledgeBaseCategoryArgs = {
  input: UpdateKnowledgeBaseCategoryInput;
};


/** Root Mutation */
export type MutationUpdateKnowledgeBaseCategoryByIdArgs = {
  input: UpdateKnowledgeBaseCategoryByIdInput;
};


/** Root Mutation */
export type MutationUpdateKnowledgeBaseCategoryDelayedJobArgs = {
  input: UpdateKnowledgeBaseCategoryDelayedJobInput;
};


/** Root Mutation */
export type MutationUpdateKnowledgeBaseCategoryDelayedJobByIdArgs = {
  input: UpdateKnowledgeBaseCategoryDelayedJobByIdInput;
};


/** Root Mutation */
export type MutationUpdateKnowledgeBaseCategoryTranslationArgs = {
  input: UpdateKnowledgeBaseCategoryTranslationInput;
};


/** Root Mutation */
export type MutationUpdateKnowledgeBaseCategoryTranslationByIdArgs = {
  input: UpdateKnowledgeBaseCategoryTranslationByIdInput;
};


/** Root Mutation */
export type MutationUpdateKnowledgeBaseCategory_Args = {
  active: Scalars['Boolean'];
  category_icon?: InputMaybe<Scalars['String']>;
  category_id: Scalars['ID'];
  created_at?: InputMaybe<Scalars['String']>;
  footer?: InputMaybe<Scalars['String']>;
  kb_locale_id: Scalars['ID'];
  keywords?: InputMaybe<Scalars['String']>;
  knowledge_base_id: Scalars['ID'];
  list_id?: InputMaybe<Scalars['Int']>;
  meta_description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  parent_id: Scalars['ID'];
  permission?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['Int']>;
  publish_now: Scalars['Boolean'];
  schedule_at?: InputMaybe<Scalars['String']>;
  title_tag?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['String']>;
};


/** Root Mutation */
export type MutationUpdateKnowledgeBaseListArgs = {
  input: UpdateKnowledgeBaseListInput;
};


/** Root Mutation */
export type MutationUpdateKnowledgeBaseListByIdArgs = {
  input: UpdateKnowledgeBaseListByIdInput;
};


/** Root Mutation */
export type MutationUpdateKnowledgeBaseTranslationArgs = {
  input: UpdateKnowledgeBaseTranslationInput;
};


/** Root Mutation */
export type MutationUpdateKnowledgeBaseTranslationByIdArgs = {
  input: UpdateKnowledgeBaseTranslationByIdInput;
};


/** Root Mutation */
export type MutationUpdateKnowledgeBasisArgs = {
  input: UpdateKnowledgeBasisInput;
};


/** Root Mutation */
export type MutationUpdateKnowledgeBasisByIdArgs = {
  input: UpdateKnowledgeBasisByIdInput;
};


/** Root Mutation */
export type MutationUpdateKnowledgebase_Args = {
  active: Scalars['Boolean'];
  category_layout: Scalars['String'];
  footer: Scalars['String'];
  front_page: Scalars['String'];
  homepage_layout: Scalars['String'];
  icon: Scalars['String'];
  kb_locale_ids: Array<InputMaybe<KnowledgebaseCreateLocale>>;
  knowledge_base_id: Scalars['ID'];
  name: Scalars['String'];
};


/** Root Mutation */
export type MutationUpdateLocaleArgs = {
  input: UpdateLocaleInput;
};


/** Root Mutation */
export type MutationUpdateLocaleByIdArgs = {
  input: UpdateLocaleByIdInput;
};


/** Root Mutation */
export type MutationUploadFileArgs = {
  multipartFormDataInput?: InputMaybe<Scalars['String']>;
  petId: Scalars['Float'];
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};

export type Order = {
  __typename?: 'Order';
  complete?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Float']>;
  petId?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Int']>;
  shipDate?: Maybe<Scalars['String']>;
  /** Order Status */
  status?: Maybe<Status3>;
};

export type OrderInput = {
  complete?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['Float']>;
  petId?: InputMaybe<Scalars['Float']>;
  quantity?: InputMaybe<Scalars['Int']>;
  shipDate?: InputMaybe<Scalars['String']>;
  /** Order Status */
  status?: InputMaybe<Status3>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']>;
};

export type Pet = {
  __typename?: 'Pet';
  category?: Maybe<Category>;
  id?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  photoUrls: Array<Maybe<Scalars['String']>>;
  /** pet status in the store */
  status?: Maybe<Status>;
  tags?: Maybe<Array<Maybe<Tag>>>;
};

/** Root Query */
export type Query = Node & {
  __typename?: 'Query';
  /** Reads a single `ActivityStream` using its globally unique `ID`. */
  activityStream?: Maybe<ActivityStream>;
  activityStreamById?: Maybe<ActivityStream>;
  /** Reads and enables pagination through a set of `ActivityStream`. */
  allActivityStreams?: Maybe<ActivityStreamsConnection>;
  /** Reads and enables pagination through a set of `KnowledgeBaseArticleDelayedJob`. */
  allKnowledgeBaseArticleDelayedJobs?: Maybe<KnowledgeBaseArticleDelayedJobsConnection>;
  /** Reads and enables pagination through a set of `KnowledgeBaseArticleTranslation`. */
  allKnowledgeBaseArticleTranslations?: Maybe<KnowledgeBaseArticleTranslationsConnection>;
  /** Reads and enables pagination through a set of `KnowledgeBaseArticle`. */
  allKnowledgeBaseArticles?: Maybe<KnowledgeBaseArticlesConnection>;
  /** Reads and enables pagination through a set of `KnowledgeBaseCategory`. */
  allKnowledgeBaseCategories?: Maybe<KnowledgeBaseCategoriesConnection>;
  /** Reads and enables pagination through a set of `KnowledgeBaseCategoryDelayedJob`. */
  allKnowledgeBaseCategoryDelayedJobs?: Maybe<KnowledgeBaseCategoryDelayedJobsConnection>;
  /** Reads and enables pagination through a set of `KnowledgeBaseCategoryTranslation`. */
  allKnowledgeBaseCategoryTranslations?: Maybe<KnowledgeBaseCategoryTranslationsConnection>;
  /** Reads and enables pagination through a set of `KnowledgeBaseList`. */
  allKnowledgeBaseLists?: Maybe<KnowledgeBaseListsConnection>;
  /** Reads and enables pagination through a set of `KnowledgeBaseTranslation`. */
  allKnowledgeBaseTranslations?: Maybe<KnowledgeBaseTranslationsConnection>;
  /** Reads and enables pagination through a set of `KnowledgeBasis`. */
  allKnowledgeBases?: Maybe<KnowledgeBasesConnection>;
  /** Reads and enables pagination through a set of `Locale`. */
  allLocales?: Maybe<LocalesConnection>;
  /** Creates an export file for a knowledgebase */
  exportKnowledgebase_?: Maybe<ExportKnowledgeBaseType>;
  /** Returns a knowledge base article translation for a given locale */
  getKnowledgeBaseArticleTranslation_?: Maybe<KnowledgeBaseArticleType>;
  /** Get all knowledgebase category articles in for a locale at a given level */
  getKnowledgeBaseArticles_?: Maybe<Array<Maybe<KnowledgeBaseArticleType>>>;
  /** Returns the level and depth of a knowledge base category */
  getKnowledgeBaseCategoryLevel_?: Maybe<KnowledgeBaseCategoryLevelType>;
  /** Get a knowledgebase category translations in a knowledge base for a specified locale */
  getKnowledgeBaseCategoryTranslation_?: Maybe<KnowledgeBaseCategoryHybridStatType>;
  /** Get a knowledgebase category by id */
  getKnowledgeBaseCategory_?: Maybe<KnowledgeBaseCategoryType>;
  /** Returns the list for the knowledgebase specified */
  getKnowledgeBaseList_?: Maybe<Array<Maybe<KnowledgeBaseListType>>>;
  /** Get all knowledgebase category translations in a knowledge base for a specified locale and level */
  getKnowledgebaseCategories_?: Maybe<Array<Maybe<KnowledgeBaseCategoryHybridStatType>>>;
  /** Returns the status of a level */
  getLevelStatus_?: Maybe<KnowledgeBaseLevelStatusHybridType>;
  /** Returns details about a scheduled knowledgebase article for deletion or update */
  getScheduleForKnowledgeBaseArticle_?: Maybe<KnowledgeBaseArticleDelayedJobType>;
  /** Get a knowledgebase translation that is scheduled for publication, deletion or update */
  getScheduleForKnowledgebaseCategoryTranslation_?: Maybe<StatusMessageForKnowledgeBaseCategoryScheduleType>;
  /** Reads a single `KnowledgeBaseArticle` using its globally unique `ID`. */
  knowledgeBaseArticle?: Maybe<KnowledgeBaseArticle>;
  knowledgeBaseArticleById?: Maybe<KnowledgeBaseArticle>;
  /** Reads a single `KnowledgeBaseArticleDelayedJob` using its globally unique `ID`. */
  knowledgeBaseArticleDelayedJob?: Maybe<KnowledgeBaseArticleDelayedJob>;
  knowledgeBaseArticleDelayedJobById?: Maybe<KnowledgeBaseArticleDelayedJob>;
  /** Reads a single `KnowledgeBaseArticleTranslation` using its globally unique `ID`. */
  knowledgeBaseArticleTranslation?: Maybe<KnowledgeBaseArticleTranslation>;
  knowledgeBaseArticleTranslationById?: Maybe<KnowledgeBaseArticleTranslation>;
  /** Reads a single `KnowledgeBaseCategory` using its globally unique `ID`. */
  knowledgeBaseCategory?: Maybe<KnowledgeBaseCategory>;
  knowledgeBaseCategoryById?: Maybe<KnowledgeBaseCategory>;
  /** Reads a single `KnowledgeBaseCategoryDelayedJob` using its globally unique `ID`. */
  knowledgeBaseCategoryDelayedJob?: Maybe<KnowledgeBaseCategoryDelayedJob>;
  knowledgeBaseCategoryDelayedJobById?: Maybe<KnowledgeBaseCategoryDelayedJob>;
  /** Reads a single `KnowledgeBaseCategoryTranslation` using its globally unique `ID`. */
  knowledgeBaseCategoryTranslation?: Maybe<KnowledgeBaseCategoryTranslation>;
  knowledgeBaseCategoryTranslationById?: Maybe<KnowledgeBaseCategoryTranslation>;
  /** Reads a single `KnowledgeBaseList` using its globally unique `ID`. */
  knowledgeBaseList?: Maybe<KnowledgeBaseList>;
  knowledgeBaseListById?: Maybe<KnowledgeBaseList>;
  /** Reads a single `KnowledgeBaseTranslation` using its globally unique `ID`. */
  knowledgeBaseTranslation?: Maybe<KnowledgeBaseTranslation>;
  knowledgeBaseTranslationById?: Maybe<KnowledgeBaseTranslation>;
  /** Reads a single `KnowledgeBasis` using its globally unique `ID`. */
  knowledgeBasis?: Maybe<KnowledgeBasis>;
  knowledgeBasisById?: Maybe<KnowledgeBasis>;
  /** Get the status color for the knowledgebase translations at the category specified */
  knowledgebaseTranslationStatusColor_?: Maybe<Array<Maybe<KnowledgebaseTranslationStatusColor>>>;
  /** Get all knowledgebase translations for a given knowledge base */
  knowledgebaseTranslations_?: Maybe<Array<Maybe<KnowledgebaseTranslationType>>>;
  /** Get a single knowledgebase by id */
  knowledgebase_?: Maybe<Knowledgebase>;
  /** Get all knowledgebases */
  knowledgebases_?: Maybe<Array<Maybe<Knowledgebase>>>;
  /** Reads a single `Locale` using its globally unique `ID`. */
  locale?: Maybe<Locale>;
  localeById?: Maybe<Locale>;
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID'];
  /**
   * For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
   *
   * Equivalent to GET /store/order/{orderId}
   */
  order?: Maybe<Order>;
  /**
   * Returns a single pet
   *
   * Equivalent to GET /pet/{petId}
   */
  pet?: Maybe<Pet>;
  /**
   * Multiple status values can be provided with comma separated strings
   *
   * Equivalent to GET /pet/findByStatus
   */
  petFindByStatus?: Maybe<Array<Maybe<Pet>>>;
  /**
   * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
   *
   * Equivalent to GET /pet/findByTags
   */
  petFindByTags?: Maybe<Array<Maybe<Pet>>>;
  ping?: Maybe<Scalars['String']>;
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  /**
   * Returns a map of status codes to quantities
   *
   * Equivalent to GET /store/inventory
   */
  storeInventory?: Maybe<Scalars['JSON']>;
  /**
   * Get user by user name
   *
   * Equivalent to GET /user/{username}
   */
  user?: Maybe<User>;
  /**
   * Logs user into the system
   *
   * Equivalent to GET /user/login
   */
  userLogin?: Maybe<Scalars['String']>;
  /**
   * Logs out current logged in user session
   *
   * Equivalent to GET /user/logout
   */
  userLogout?: Maybe<Scalars['JSON']>;
};


/** Root Query */
export type QueryActivityStreamArgs = {
  nodeId: Scalars['ID'];
};


/** Root Query */
export type QueryActivityStreamByIdArgs = {
  id: Scalars['Int'];
};


/** Root Query */
export type QueryAllActivityStreamsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<ActivityStreamCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ActivityStreamsOrderBy>>;
};


/** Root Query */
export type QueryAllKnowledgeBaseArticleDelayedJobsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<KnowledgeBaseArticleDelayedJobCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<KnowledgeBaseArticleDelayedJobsOrderBy>>;
};


/** Root Query */
export type QueryAllKnowledgeBaseArticleTranslationsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<KnowledgeBaseArticleTranslationCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<KnowledgeBaseArticleTranslationsOrderBy>>;
};


/** Root Query */
export type QueryAllKnowledgeBaseArticlesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<KnowledgeBaseArticleCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<KnowledgeBaseArticlesOrderBy>>;
};


/** Root Query */
export type QueryAllKnowledgeBaseCategoriesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<KnowledgeBaseCategoryCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<KnowledgeBaseCategoriesOrderBy>>;
};


/** Root Query */
export type QueryAllKnowledgeBaseCategoryDelayedJobsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<KnowledgeBaseCategoryDelayedJobCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<KnowledgeBaseCategoryDelayedJobsOrderBy>>;
};


/** Root Query */
export type QueryAllKnowledgeBaseCategoryTranslationsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<KnowledgeBaseCategoryTranslationCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<KnowledgeBaseCategoryTranslationsOrderBy>>;
};


/** Root Query */
export type QueryAllKnowledgeBaseListsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<KnowledgeBaseListCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<KnowledgeBaseListsOrderBy>>;
};


/** Root Query */
export type QueryAllKnowledgeBaseTranslationsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<KnowledgeBaseTranslationCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<KnowledgeBaseTranslationsOrderBy>>;
};


/** Root Query */
export type QueryAllKnowledgeBasesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<KnowledgeBasisCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<KnowledgeBasesOrderBy>>;
};


/** Root Query */
export type QueryAllLocalesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<LocaleCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<LocalesOrderBy>>;
};


/** Root Query */
export type QueryExportKnowledgebase_Args = {
  knowledge_base_id: Scalars['ID'];
};


/** Root Query */
export type QueryGetKnowledgeBaseArticleTranslation_Args = {
  article_id: Scalars['ID'];
  kb_locale_id: Scalars['ID'];
};


/** Root Query */
export type QueryGetKnowledgeBaseArticles_Args = {
  category_id: Scalars['ID'];
  kb_locale_id: Scalars['ID'];
  knowledge_base_id: Scalars['ID'];
  level?: InputMaybe<Scalars['Int']>;
  parent_id?: InputMaybe<Scalars['ID']>;
};


/** Root Query */
export type QueryGetKnowledgeBaseCategoryLevel_Args = {
  category_id: Scalars['ID'];
  kb_locale_id: Scalars['ID'];
  knowledge_base_id: Scalars['ID'];
};


/** Root Query */
export type QueryGetKnowledgeBaseCategoryTranslation_Args = {
  category_id: Scalars['ID'];
  kb_locale_id: Scalars['ID'];
};


/** Root Query */
export type QueryGetKnowledgeBaseCategory_Args = {
  category_id: Scalars['ID'];
};


/** Root Query */
export type QueryGetKnowledgeBaseList_Args = {
  knowledge_base_id: Scalars['ID'];
  list_type: Scalars['String'];
};


/** Root Query */
export type QueryGetKnowledgebaseCategories_Args = {
  kb_locale_id: Scalars['ID'];
  knowledge_base_id: Scalars['ID'];
  level?: InputMaybe<Scalars['Int']>;
  parent_id?: InputMaybe<Scalars['ID']>;
};


/** Root Query */
export type QueryGetLevelStatus_Args = {
  kb_locale_id: Scalars['ID'];
  knowledge_base_id: Scalars['ID'];
  level: Scalars['Int'];
};


/** Root Query */
export type QueryGetScheduleForKnowledgeBaseArticle_Args = {
  knowledge_base_article_translation_id: Scalars['ID'];
  schedule_type: Scalars['String'];
};


/** Root Query */
export type QueryGetScheduleForKnowledgebaseCategoryTranslation_Args = {
  knowledge_base_category_translation_id: Scalars['ID'];
  operation: Scalars['String'];
};


/** Root Query */
export type QueryKnowledgeBaseArticleArgs = {
  nodeId: Scalars['ID'];
};


/** Root Query */
export type QueryKnowledgeBaseArticleByIdArgs = {
  id: Scalars['Int'];
};


/** Root Query */
export type QueryKnowledgeBaseArticleDelayedJobArgs = {
  nodeId: Scalars['ID'];
};


/** Root Query */
export type QueryKnowledgeBaseArticleDelayedJobByIdArgs = {
  id: Scalars['Int'];
};


/** Root Query */
export type QueryKnowledgeBaseArticleTranslationArgs = {
  nodeId: Scalars['ID'];
};


/** Root Query */
export type QueryKnowledgeBaseArticleTranslationByIdArgs = {
  id: Scalars['Int'];
};


/** Root Query */
export type QueryKnowledgeBaseCategoryArgs = {
  nodeId: Scalars['ID'];
};


/** Root Query */
export type QueryKnowledgeBaseCategoryByIdArgs = {
  id: Scalars['Int'];
};


/** Root Query */
export type QueryKnowledgeBaseCategoryDelayedJobArgs = {
  nodeId: Scalars['ID'];
};


/** Root Query */
export type QueryKnowledgeBaseCategoryDelayedJobByIdArgs = {
  id: Scalars['Int'];
};


/** Root Query */
export type QueryKnowledgeBaseCategoryTranslationArgs = {
  nodeId: Scalars['ID'];
};


/** Root Query */
export type QueryKnowledgeBaseCategoryTranslationByIdArgs = {
  id: Scalars['Int'];
};


/** Root Query */
export type QueryKnowledgeBaseListArgs = {
  nodeId: Scalars['ID'];
};


/** Root Query */
export type QueryKnowledgeBaseListByIdArgs = {
  id: Scalars['Int'];
};


/** Root Query */
export type QueryKnowledgeBaseTranslationArgs = {
  nodeId: Scalars['ID'];
};


/** Root Query */
export type QueryKnowledgeBaseTranslationByIdArgs = {
  id: Scalars['Int'];
};


/** Root Query */
export type QueryKnowledgeBasisArgs = {
  nodeId: Scalars['ID'];
};


/** Root Query */
export type QueryKnowledgeBasisByIdArgs = {
  id: Scalars['Int'];
};


/** Root Query */
export type QueryKnowledgebaseTranslationStatusColor_Args = {
  category_id: Scalars['ID'];
  filter_by: Scalars['String'];
  knowledge_base_id: Scalars['ID'];
};


/** Root Query */
export type QueryKnowledgebaseTranslations_Args = {
  knowledge_base_id: Scalars['ID'];
};


/** Root Query */
export type QueryKnowledgebase_Args = {
  knowledge_base_id: Scalars['ID'];
};


/** Root Query */
export type QueryLocaleArgs = {
  nodeId: Scalars['ID'];
};


/** Root Query */
export type QueryLocaleByIdArgs = {
  id: Scalars['Int'];
};


/** Root Query */
export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
};


/** Root Query */
export type QueryOrderArgs = {
  orderId: Scalars['Float'];
};


/** Root Query */
export type QueryPetArgs = {
  petId: Scalars['Float'];
};


/** Root Query */
export type QueryPetFindByStatusArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  status: Array<InputMaybe<Status4ListItem>>;
};


/** Root Query */
export type QueryPetFindByTagsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  tags: Array<InputMaybe<Scalars['String']>>;
};


/** Root Query */
export type QueryUserArgs = {
  username: Scalars['String'];
};


/** Root Query */
export type QueryUserLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};

/** An object which is used to return status messages for static responses */
export type Response = {
  __typename?: 'Response';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export enum Status {
  Available = 'AVAILABLE',
  Pending = 'PENDING',
  Sold = 'SOLD'
}

export enum Status3 {
  Approved = 'APPROVED',
  Delivered = 'DELIVERED',
  Placed = 'PLACED'
}

export enum Status4ListItem {
  Available = 'AVAILABLE',
  Pending = 'PENDING',
  Sold = 'SOLD'
}

/** A status message container for the KnowledgBaseCategoryScheduleType */
export type StatusMessageForKnowledgeBaseCategoryScheduleType = {
  __typename?: 'StatusMessageForKnowledgeBaseCategoryScheduleType';
  data?: Maybe<KnowledgeBaseCategoryScheduleType>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type Tag = {
  __typename?: 'Tag';
  id?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
};

/** All input for the `updateActivityStreamById` mutation. */
export type UpdateActivityStreamByIdInput = {
  /** An object where the defined keys will be set on the `ActivityStream` being updated. */
  activityStreamPatch: ActivityStreamPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** All input for the `updateActivityStream` mutation. */
export type UpdateActivityStreamInput = {
  /** An object where the defined keys will be set on the `ActivityStream` being updated. */
  activityStreamPatch: ActivityStreamPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `ActivityStream` to be updated. */
  nodeId: Scalars['ID'];
};

/** The output of our update `ActivityStream` mutation. */
export type UpdateActivityStreamPayload = {
  __typename?: 'UpdateActivityStreamPayload';
  /** The `ActivityStream` that was updated by this mutation. */
  activityStream?: Maybe<ActivityStream>;
  /** An edge for our `ActivityStream`. May be used by Relay 1. */
  activityStreamEdge?: Maybe<ActivityStreamsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `ActivityStream` mutation. */
export type UpdateActivityStreamPayloadActivityStreamEdgeArgs = {
  orderBy?: InputMaybe<Array<ActivityStreamsOrderBy>>;
};

/** All input for the `updateKnowledgeBaseArticleById` mutation. */
export type UpdateKnowledgeBaseArticleByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An object where the defined keys will be set on the `KnowledgeBaseArticle` being updated. */
  knowledgeBaseArticlePatch: KnowledgeBaseArticlePatch;
};

/** All input for the `updateKnowledgeBaseArticleDelayedJobById` mutation. */
export type UpdateKnowledgeBaseArticleDelayedJobByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An object where the defined keys will be set on the `KnowledgeBaseArticleDelayedJob` being updated. */
  knowledgeBaseArticleDelayedJobPatch: KnowledgeBaseArticleDelayedJobPatch;
};

/** All input for the `updateKnowledgeBaseArticleDelayedJob` mutation. */
export type UpdateKnowledgeBaseArticleDelayedJobInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `KnowledgeBaseArticleDelayedJob` being updated. */
  knowledgeBaseArticleDelayedJobPatch: KnowledgeBaseArticleDelayedJobPatch;
  /** The globally unique `ID` which will identify a single `KnowledgeBaseArticleDelayedJob` to be updated. */
  nodeId: Scalars['ID'];
};

/** The output of our update `KnowledgeBaseArticleDelayedJob` mutation. */
export type UpdateKnowledgeBaseArticleDelayedJobPayload = {
  __typename?: 'UpdateKnowledgeBaseArticleDelayedJobPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `KnowledgeBaseArticleDelayedJob` that was updated by this mutation. */
  knowledgeBaseArticleDelayedJob?: Maybe<KnowledgeBaseArticleDelayedJob>;
  /** An edge for our `KnowledgeBaseArticleDelayedJob`. May be used by Relay 1. */
  knowledgeBaseArticleDelayedJobEdge?: Maybe<KnowledgeBaseArticleDelayedJobsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `KnowledgeBaseArticleDelayedJob` mutation. */
export type UpdateKnowledgeBaseArticleDelayedJobPayloadKnowledgeBaseArticleDelayedJobEdgeArgs = {
  orderBy?: InputMaybe<Array<KnowledgeBaseArticleDelayedJobsOrderBy>>;
};

/** All input for the `updateKnowledgeBaseArticle` mutation. */
export type UpdateKnowledgeBaseArticleInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `KnowledgeBaseArticle` being updated. */
  knowledgeBaseArticlePatch: KnowledgeBaseArticlePatch;
  /** The globally unique `ID` which will identify a single `KnowledgeBaseArticle` to be updated. */
  nodeId: Scalars['ID'];
};

/** The output of our update `KnowledgeBaseArticle` mutation. */
export type UpdateKnowledgeBaseArticlePayload = {
  __typename?: 'UpdateKnowledgeBaseArticlePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `KnowledgeBaseArticle` that was updated by this mutation. */
  knowledgeBaseArticle?: Maybe<KnowledgeBaseArticle>;
  /** An edge for our `KnowledgeBaseArticle`. May be used by Relay 1. */
  knowledgeBaseArticleEdge?: Maybe<KnowledgeBaseArticlesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `KnowledgeBaseArticle` mutation. */
export type UpdateKnowledgeBaseArticlePayloadKnowledgeBaseArticleEdgeArgs = {
  orderBy?: InputMaybe<Array<KnowledgeBaseArticlesOrderBy>>;
};

/** All input for the `updateKnowledgeBaseArticleTranslationById` mutation. */
export type UpdateKnowledgeBaseArticleTranslationByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An object where the defined keys will be set on the `KnowledgeBaseArticleTranslation` being updated. */
  knowledgeBaseArticleTranslationPatch: KnowledgeBaseArticleTranslationPatch;
};

/** All input for the `updateKnowledgeBaseArticleTranslation` mutation. */
export type UpdateKnowledgeBaseArticleTranslationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `KnowledgeBaseArticleTranslation` being updated. */
  knowledgeBaseArticleTranslationPatch: KnowledgeBaseArticleTranslationPatch;
  /** The globally unique `ID` which will identify a single `KnowledgeBaseArticleTranslation` to be updated. */
  nodeId: Scalars['ID'];
};

/** The output of our update `KnowledgeBaseArticleTranslation` mutation. */
export type UpdateKnowledgeBaseArticleTranslationPayload = {
  __typename?: 'UpdateKnowledgeBaseArticleTranslationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `KnowledgeBaseArticleTranslation` that was updated by this mutation. */
  knowledgeBaseArticleTranslation?: Maybe<KnowledgeBaseArticleTranslation>;
  /** An edge for our `KnowledgeBaseArticleTranslation`. May be used by Relay 1. */
  knowledgeBaseArticleTranslationEdge?: Maybe<KnowledgeBaseArticleTranslationsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `KnowledgeBaseArticleTranslation` mutation. */
export type UpdateKnowledgeBaseArticleTranslationPayloadKnowledgeBaseArticleTranslationEdgeArgs = {
  orderBy?: InputMaybe<Array<KnowledgeBaseArticleTranslationsOrderBy>>;
};

/** All input for the `updateKnowledgeBaseCategoryById` mutation. */
export type UpdateKnowledgeBaseCategoryByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An object where the defined keys will be set on the `KnowledgeBaseCategory` being updated. */
  knowledgeBaseCategoryPatch: KnowledgeBaseCategoryPatch;
};

/** All input for the `updateKnowledgeBaseCategoryDelayedJobById` mutation. */
export type UpdateKnowledgeBaseCategoryDelayedJobByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An object where the defined keys will be set on the `KnowledgeBaseCategoryDelayedJob` being updated. */
  knowledgeBaseCategoryDelayedJobPatch: KnowledgeBaseCategoryDelayedJobPatch;
};

/** All input for the `updateKnowledgeBaseCategoryDelayedJob` mutation. */
export type UpdateKnowledgeBaseCategoryDelayedJobInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `KnowledgeBaseCategoryDelayedJob` being updated. */
  knowledgeBaseCategoryDelayedJobPatch: KnowledgeBaseCategoryDelayedJobPatch;
  /** The globally unique `ID` which will identify a single `KnowledgeBaseCategoryDelayedJob` to be updated. */
  nodeId: Scalars['ID'];
};

/** The output of our update `KnowledgeBaseCategoryDelayedJob` mutation. */
export type UpdateKnowledgeBaseCategoryDelayedJobPayload = {
  __typename?: 'UpdateKnowledgeBaseCategoryDelayedJobPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `KnowledgeBaseCategoryDelayedJob` that was updated by this mutation. */
  knowledgeBaseCategoryDelayedJob?: Maybe<KnowledgeBaseCategoryDelayedJob>;
  /** An edge for our `KnowledgeBaseCategoryDelayedJob`. May be used by Relay 1. */
  knowledgeBaseCategoryDelayedJobEdge?: Maybe<KnowledgeBaseCategoryDelayedJobsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `KnowledgeBaseCategoryDelayedJob` mutation. */
export type UpdateKnowledgeBaseCategoryDelayedJobPayloadKnowledgeBaseCategoryDelayedJobEdgeArgs = {
  orderBy?: InputMaybe<Array<KnowledgeBaseCategoryDelayedJobsOrderBy>>;
};

/** All input for the `updateKnowledgeBaseCategory` mutation. */
export type UpdateKnowledgeBaseCategoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `KnowledgeBaseCategory` being updated. */
  knowledgeBaseCategoryPatch: KnowledgeBaseCategoryPatch;
  /** The globally unique `ID` which will identify a single `KnowledgeBaseCategory` to be updated. */
  nodeId: Scalars['ID'];
};

/** The output of our update `KnowledgeBaseCategory` mutation. */
export type UpdateKnowledgeBaseCategoryPayload = {
  __typename?: 'UpdateKnowledgeBaseCategoryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `KnowledgeBaseCategory` that was updated by this mutation. */
  knowledgeBaseCategory?: Maybe<KnowledgeBaseCategory>;
  /** An edge for our `KnowledgeBaseCategory`. May be used by Relay 1. */
  knowledgeBaseCategoryEdge?: Maybe<KnowledgeBaseCategoriesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `KnowledgeBaseCategory` mutation. */
export type UpdateKnowledgeBaseCategoryPayloadKnowledgeBaseCategoryEdgeArgs = {
  orderBy?: InputMaybe<Array<KnowledgeBaseCategoriesOrderBy>>;
};

/** All input for the `updateKnowledgeBaseCategoryTranslationById` mutation. */
export type UpdateKnowledgeBaseCategoryTranslationByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An object where the defined keys will be set on the `KnowledgeBaseCategoryTranslation` being updated. */
  knowledgeBaseCategoryTranslationPatch: KnowledgeBaseCategoryTranslationPatch;
};

/** All input for the `updateKnowledgeBaseCategoryTranslation` mutation. */
export type UpdateKnowledgeBaseCategoryTranslationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `KnowledgeBaseCategoryTranslation` being updated. */
  knowledgeBaseCategoryTranslationPatch: KnowledgeBaseCategoryTranslationPatch;
  /** The globally unique `ID` which will identify a single `KnowledgeBaseCategoryTranslation` to be updated. */
  nodeId: Scalars['ID'];
};

/** The output of our update `KnowledgeBaseCategoryTranslation` mutation. */
export type UpdateKnowledgeBaseCategoryTranslationPayload = {
  __typename?: 'UpdateKnowledgeBaseCategoryTranslationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `KnowledgeBaseCategoryTranslation` that was updated by this mutation. */
  knowledgeBaseCategoryTranslation?: Maybe<KnowledgeBaseCategoryTranslation>;
  /** An edge for our `KnowledgeBaseCategoryTranslation`. May be used by Relay 1. */
  knowledgeBaseCategoryTranslationEdge?: Maybe<KnowledgeBaseCategoryTranslationsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `KnowledgeBaseCategoryTranslation` mutation. */
export type UpdateKnowledgeBaseCategoryTranslationPayloadKnowledgeBaseCategoryTranslationEdgeArgs = {
  orderBy?: InputMaybe<Array<KnowledgeBaseCategoryTranslationsOrderBy>>;
};

/** All input for the `updateKnowledgeBaseListById` mutation. */
export type UpdateKnowledgeBaseListByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An object where the defined keys will be set on the `KnowledgeBaseList` being updated. */
  knowledgeBaseListPatch: KnowledgeBaseListPatch;
};

/** All input for the `updateKnowledgeBaseList` mutation. */
export type UpdateKnowledgeBaseListInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `KnowledgeBaseList` being updated. */
  knowledgeBaseListPatch: KnowledgeBaseListPatch;
  /** The globally unique `ID` which will identify a single `KnowledgeBaseList` to be updated. */
  nodeId: Scalars['ID'];
};

/** The output of our update `KnowledgeBaseList` mutation. */
export type UpdateKnowledgeBaseListPayload = {
  __typename?: 'UpdateKnowledgeBaseListPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `KnowledgeBaseList` that was updated by this mutation. */
  knowledgeBaseList?: Maybe<KnowledgeBaseList>;
  /** An edge for our `KnowledgeBaseList`. May be used by Relay 1. */
  knowledgeBaseListEdge?: Maybe<KnowledgeBaseListsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `KnowledgeBaseList` mutation. */
export type UpdateKnowledgeBaseListPayloadKnowledgeBaseListEdgeArgs = {
  orderBy?: InputMaybe<Array<KnowledgeBaseListsOrderBy>>;
};

/** All input for the `updateKnowledgeBaseTranslationById` mutation. */
export type UpdateKnowledgeBaseTranslationByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An object where the defined keys will be set on the `KnowledgeBaseTranslation` being updated. */
  knowledgeBaseTranslationPatch: KnowledgeBaseTranslationPatch;
};

/** All input for the `updateKnowledgeBaseTranslation` mutation. */
export type UpdateKnowledgeBaseTranslationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `KnowledgeBaseTranslation` being updated. */
  knowledgeBaseTranslationPatch: KnowledgeBaseTranslationPatch;
  /** The globally unique `ID` which will identify a single `KnowledgeBaseTranslation` to be updated. */
  nodeId: Scalars['ID'];
};

/** The output of our update `KnowledgeBaseTranslation` mutation. */
export type UpdateKnowledgeBaseTranslationPayload = {
  __typename?: 'UpdateKnowledgeBaseTranslationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `KnowledgeBaseTranslation` that was updated by this mutation. */
  knowledgeBaseTranslation?: Maybe<KnowledgeBaseTranslation>;
  /** An edge for our `KnowledgeBaseTranslation`. May be used by Relay 1. */
  knowledgeBaseTranslationEdge?: Maybe<KnowledgeBaseTranslationsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `KnowledgeBaseTranslation` mutation. */
export type UpdateKnowledgeBaseTranslationPayloadKnowledgeBaseTranslationEdgeArgs = {
  orderBy?: InputMaybe<Array<KnowledgeBaseTranslationsOrderBy>>;
};

/** All input for the `updateKnowledgeBasisById` mutation. */
export type UpdateKnowledgeBasisByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An object where the defined keys will be set on the `KnowledgeBasis` being updated. */
  knowledgeBasisPatch: KnowledgeBasisPatch;
};

/** All input for the `updateKnowledgeBasis` mutation. */
export type UpdateKnowledgeBasisInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `KnowledgeBasis` being updated. */
  knowledgeBasisPatch: KnowledgeBasisPatch;
  /** The globally unique `ID` which will identify a single `KnowledgeBasis` to be updated. */
  nodeId: Scalars['ID'];
};

/** The output of our update `KnowledgeBasis` mutation. */
export type UpdateKnowledgeBasisPayload = {
  __typename?: 'UpdateKnowledgeBasisPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `KnowledgeBasis` that was updated by this mutation. */
  knowledgeBasis?: Maybe<KnowledgeBasis>;
  /** An edge for our `KnowledgeBasis`. May be used by Relay 1. */
  knowledgeBasisEdge?: Maybe<KnowledgeBasesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `KnowledgeBasis` mutation. */
export type UpdateKnowledgeBasisPayloadKnowledgeBasisEdgeArgs = {
  orderBy?: InputMaybe<Array<KnowledgeBasesOrderBy>>;
};

/** All input for the `updateLocaleById` mutation. */
export type UpdateLocaleByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An object where the defined keys will be set on the `Locale` being updated. */
  localePatch: LocalePatch;
};

/** All input for the `updateLocale` mutation. */
export type UpdateLocaleInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Locale` being updated. */
  localePatch: LocalePatch;
  /** The globally unique `ID` which will identify a single `Locale` to be updated. */
  nodeId: Scalars['ID'];
};

/** The output of our update `Locale` mutation. */
export type UpdateLocalePayload = {
  __typename?: 'UpdateLocalePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Locale` that was updated by this mutation. */
  locale?: Maybe<Locale>;
  /** An edge for our `Locale`. May be used by Relay 1. */
  localeEdge?: Maybe<LocalesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Locale` mutation. */
export type UpdateLocalePayloadLocaleEdgeArgs = {
  orderBy?: InputMaybe<Array<LocalesOrderBy>>;
};

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  lastName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  /** User Status */
  userStatus?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
};

export type UserInput = {
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  /** User Status */
  userStatus?: InputMaybe<Scalars['Int']>;
  username?: InputMaybe<Scalars['String']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  ActivityStream: ResolverTypeWrapper<ActivityStream>;
  ActivityStreamCondition: ActivityStreamCondition;
  ActivityStreamInput: ActivityStreamInput;
  ActivityStreamPatch: ActivityStreamPatch;
  ActivityStreamsConnection: ResolverTypeWrapper<ActivityStreamsConnection>;
  ActivityStreamsEdge: ResolverTypeWrapper<ActivityStreamsEdge>;
  ActivityStreamsOrderBy: ActivityStreamsOrderBy;
  ApiResponse: ResolverTypeWrapper<ApiResponse>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Category: ResolverTypeWrapper<Category>;
  CreateActivityStreamInput: CreateActivityStreamInput;
  CreateActivityStreamPayload: ResolverTypeWrapper<CreateActivityStreamPayload>;
  CreateKnowledgeBaseArticleDelayedJobInput: CreateKnowledgeBaseArticleDelayedJobInput;
  CreateKnowledgeBaseArticleDelayedJobPayload: ResolverTypeWrapper<CreateKnowledgeBaseArticleDelayedJobPayload>;
  CreateKnowledgeBaseArticleInput: CreateKnowledgeBaseArticleInput;
  CreateKnowledgeBaseArticlePayload: ResolverTypeWrapper<CreateKnowledgeBaseArticlePayload>;
  CreateKnowledgeBaseArticleTranslationInput: CreateKnowledgeBaseArticleTranslationInput;
  CreateKnowledgeBaseArticleTranslationPayload: ResolverTypeWrapper<CreateKnowledgeBaseArticleTranslationPayload>;
  CreateKnowledgeBaseCategoryDelayedJobInput: CreateKnowledgeBaseCategoryDelayedJobInput;
  CreateKnowledgeBaseCategoryDelayedJobPayload: ResolverTypeWrapper<CreateKnowledgeBaseCategoryDelayedJobPayload>;
  CreateKnowledgeBaseCategoryInput: CreateKnowledgeBaseCategoryInput;
  CreateKnowledgeBaseCategoryPayload: ResolverTypeWrapper<CreateKnowledgeBaseCategoryPayload>;
  CreateKnowledgeBaseCategoryTranslationInput: CreateKnowledgeBaseCategoryTranslationInput;
  CreateKnowledgeBaseCategoryTranslationPayload: ResolverTypeWrapper<CreateKnowledgeBaseCategoryTranslationPayload>;
  CreateKnowledgeBaseListInput: CreateKnowledgeBaseListInput;
  CreateKnowledgeBaseListPayload: ResolverTypeWrapper<CreateKnowledgeBaseListPayload>;
  CreateKnowledgeBaseTranslationInput: CreateKnowledgeBaseTranslationInput;
  CreateKnowledgeBaseTranslationPayload: ResolverTypeWrapper<CreateKnowledgeBaseTranslationPayload>;
  CreateKnowledgeBasisInput: CreateKnowledgeBasisInput;
  CreateKnowledgeBasisPayload: ResolverTypeWrapper<CreateKnowledgeBasisPayload>;
  CreateLocaleInput: CreateLocaleInput;
  CreateLocalePayload: ResolverTypeWrapper<CreateLocalePayload>;
  Cursor: ResolverTypeWrapper<Scalars['Cursor']>;
  Datetime: ResolverTypeWrapper<Scalars['Datetime']>;
  DeleteActivityStreamByIdInput: DeleteActivityStreamByIdInput;
  DeleteActivityStreamInput: DeleteActivityStreamInput;
  DeleteActivityStreamPayload: ResolverTypeWrapper<DeleteActivityStreamPayload>;
  DeleteKnowledgeBaseArticleByIdInput: DeleteKnowledgeBaseArticleByIdInput;
  DeleteKnowledgeBaseArticleDelayedJobByIdInput: DeleteKnowledgeBaseArticleDelayedJobByIdInput;
  DeleteKnowledgeBaseArticleDelayedJobInput: DeleteKnowledgeBaseArticleDelayedJobInput;
  DeleteKnowledgeBaseArticleDelayedJobPayload: ResolverTypeWrapper<DeleteKnowledgeBaseArticleDelayedJobPayload>;
  DeleteKnowledgeBaseArticleInput: DeleteKnowledgeBaseArticleInput;
  DeleteKnowledgeBaseArticlePayload: ResolverTypeWrapper<DeleteKnowledgeBaseArticlePayload>;
  DeleteKnowledgeBaseArticleTranslationByIdInput: DeleteKnowledgeBaseArticleTranslationByIdInput;
  DeleteKnowledgeBaseArticleTranslationInput: DeleteKnowledgeBaseArticleTranslationInput;
  DeleteKnowledgeBaseArticleTranslationPayload: ResolverTypeWrapper<DeleteKnowledgeBaseArticleTranslationPayload>;
  DeleteKnowledgeBaseCategoryByIdInput: DeleteKnowledgeBaseCategoryByIdInput;
  DeleteKnowledgeBaseCategoryDelayedJobByIdInput: DeleteKnowledgeBaseCategoryDelayedJobByIdInput;
  DeleteKnowledgeBaseCategoryDelayedJobInput: DeleteKnowledgeBaseCategoryDelayedJobInput;
  DeleteKnowledgeBaseCategoryDelayedJobPayload: ResolverTypeWrapper<DeleteKnowledgeBaseCategoryDelayedJobPayload>;
  DeleteKnowledgeBaseCategoryInput: DeleteKnowledgeBaseCategoryInput;
  DeleteKnowledgeBaseCategoryPayload: ResolverTypeWrapper<DeleteKnowledgeBaseCategoryPayload>;
  DeleteKnowledgeBaseCategoryTranslationByIdInput: DeleteKnowledgeBaseCategoryTranslationByIdInput;
  DeleteKnowledgeBaseCategoryTranslationInput: DeleteKnowledgeBaseCategoryTranslationInput;
  DeleteKnowledgeBaseCategoryTranslationPayload: ResolverTypeWrapper<DeleteKnowledgeBaseCategoryTranslationPayload>;
  DeleteKnowledgeBaseListByIdInput: DeleteKnowledgeBaseListByIdInput;
  DeleteKnowledgeBaseListInput: DeleteKnowledgeBaseListInput;
  DeleteKnowledgeBaseListPayload: ResolverTypeWrapper<DeleteKnowledgeBaseListPayload>;
  DeleteKnowledgeBaseTranslationByIdInput: DeleteKnowledgeBaseTranslationByIdInput;
  DeleteKnowledgeBaseTranslationInput: DeleteKnowledgeBaseTranslationInput;
  DeleteKnowledgeBaseTranslationPayload: ResolverTypeWrapper<DeleteKnowledgeBaseTranslationPayload>;
  DeleteKnowledgeBasisByIdInput: DeleteKnowledgeBasisByIdInput;
  DeleteKnowledgeBasisInput: DeleteKnowledgeBasisInput;
  DeleteKnowledgeBasisPayload: ResolverTypeWrapper<DeleteKnowledgeBasisPayload>;
  DeleteLocaleByIdInput: DeleteLocaleByIdInput;
  DeleteLocaleInput: DeleteLocaleInput;
  DeleteLocalePayload: ResolverTypeWrapper<DeleteLocalePayload>;
  ExportKnowledgeBaseType: ResolverTypeWrapper<ExportKnowledgeBaseType>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  KnowledgeBaseArticle: ResolverTypeWrapper<KnowledgeBaseArticle>;
  KnowledgeBaseArticleCondition: KnowledgeBaseArticleCondition;
  KnowledgeBaseArticleDelayedJob: ResolverTypeWrapper<KnowledgeBaseArticleDelayedJob>;
  KnowledgeBaseArticleDelayedJobCondition: KnowledgeBaseArticleDelayedJobCondition;
  KnowledgeBaseArticleDelayedJobInput: KnowledgeBaseArticleDelayedJobInput;
  KnowledgeBaseArticleDelayedJobPatch: KnowledgeBaseArticleDelayedJobPatch;
  KnowledgeBaseArticleDelayedJobType: ResolverTypeWrapper<KnowledgeBaseArticleDelayedJobType>;
  KnowledgeBaseArticleDelayedJobsConnection: ResolverTypeWrapper<KnowledgeBaseArticleDelayedJobsConnection>;
  KnowledgeBaseArticleDelayedJobsEdge: ResolverTypeWrapper<KnowledgeBaseArticleDelayedJobsEdge>;
  KnowledgeBaseArticleDelayedJobsOrderBy: KnowledgeBaseArticleDelayedJobsOrderBy;
  KnowledgeBaseArticleInput: KnowledgeBaseArticleInput;
  KnowledgeBaseArticlePatch: KnowledgeBaseArticlePatch;
  KnowledgeBaseArticleTranslation: ResolverTypeWrapper<KnowledgeBaseArticleTranslation>;
  KnowledgeBaseArticleTranslationCondition: KnowledgeBaseArticleTranslationCondition;
  KnowledgeBaseArticleTranslationInput: KnowledgeBaseArticleTranslationInput;
  KnowledgeBaseArticleTranslationPatch: KnowledgeBaseArticleTranslationPatch;
  KnowledgeBaseArticleTranslationTypeInput: KnowledgeBaseArticleTranslationTypeInput;
  KnowledgeBaseArticleTranslationsConnection: ResolverTypeWrapper<KnowledgeBaseArticleTranslationsConnection>;
  KnowledgeBaseArticleTranslationsEdge: ResolverTypeWrapper<KnowledgeBaseArticleTranslationsEdge>;
  KnowledgeBaseArticleTranslationsOrderBy: KnowledgeBaseArticleTranslationsOrderBy;
  KnowledgeBaseArticleType: ResolverTypeWrapper<KnowledgeBaseArticleType>;
  KnowledgeBaseArticlesConnection: ResolverTypeWrapper<KnowledgeBaseArticlesConnection>;
  KnowledgeBaseArticlesEdge: ResolverTypeWrapper<KnowledgeBaseArticlesEdge>;
  KnowledgeBaseArticlesOrderBy: KnowledgeBaseArticlesOrderBy;
  KnowledgeBaseCategoriesConnection: ResolverTypeWrapper<KnowledgeBaseCategoriesConnection>;
  KnowledgeBaseCategoriesEdge: ResolverTypeWrapper<KnowledgeBaseCategoriesEdge>;
  KnowledgeBaseCategoriesOrderBy: KnowledgeBaseCategoriesOrderBy;
  KnowledgeBaseCategory: ResolverTypeWrapper<KnowledgeBaseCategory>;
  KnowledgeBaseCategoryCondition: KnowledgeBaseCategoryCondition;
  KnowledgeBaseCategoryDelayedJob: ResolverTypeWrapper<KnowledgeBaseCategoryDelayedJob>;
  KnowledgeBaseCategoryDelayedJobCondition: KnowledgeBaseCategoryDelayedJobCondition;
  KnowledgeBaseCategoryDelayedJobInput: KnowledgeBaseCategoryDelayedJobInput;
  KnowledgeBaseCategoryDelayedJobPatch: KnowledgeBaseCategoryDelayedJobPatch;
  KnowledgeBaseCategoryDelayedJobsConnection: ResolverTypeWrapper<KnowledgeBaseCategoryDelayedJobsConnection>;
  KnowledgeBaseCategoryDelayedJobsEdge: ResolverTypeWrapper<KnowledgeBaseCategoryDelayedJobsEdge>;
  KnowledgeBaseCategoryDelayedJobsOrderBy: KnowledgeBaseCategoryDelayedJobsOrderBy;
  KnowledgeBaseCategoryHybridStatType: ResolverTypeWrapper<KnowledgeBaseCategoryHybridStatType>;
  KnowledgeBaseCategoryHybridType: ResolverTypeWrapper<KnowledgeBaseCategoryHybridType>;
  KnowledgeBaseCategoryInfoType: ResolverTypeWrapper<KnowledgeBaseCategoryInfoType>;
  KnowledgeBaseCategoryInput: KnowledgeBaseCategoryInput;
  KnowledgeBaseCategoryLevelType: ResolverTypeWrapper<KnowledgeBaseCategoryLevelType>;
  KnowledgeBaseCategoryPatch: KnowledgeBaseCategoryPatch;
  KnowledgeBaseCategoryScheduleType: ResolverTypeWrapper<KnowledgeBaseCategoryScheduleType>;
  KnowledgeBaseCategoryStatType: ResolverTypeWrapper<KnowledgeBaseCategoryStatType>;
  KnowledgeBaseCategoryTranslation: ResolverTypeWrapper<KnowledgeBaseCategoryTranslation>;
  KnowledgeBaseCategoryTranslationCondition: KnowledgeBaseCategoryTranslationCondition;
  KnowledgeBaseCategoryTranslationInput: KnowledgeBaseCategoryTranslationInput;
  KnowledgeBaseCategoryTranslationPatch: KnowledgeBaseCategoryTranslationPatch;
  KnowledgeBaseCategoryTranslationType: ResolverTypeWrapper<KnowledgeBaseCategoryTranslationType>;
  KnowledgeBaseCategoryTranslationTypeInput: KnowledgeBaseCategoryTranslationTypeInput;
  KnowledgeBaseCategoryTranslationsConnection: ResolverTypeWrapper<KnowledgeBaseCategoryTranslationsConnection>;
  KnowledgeBaseCategoryTranslationsEdge: ResolverTypeWrapper<KnowledgeBaseCategoryTranslationsEdge>;
  KnowledgeBaseCategoryTranslationsOrderBy: KnowledgeBaseCategoryTranslationsOrderBy;
  KnowledgeBaseCategoryType: ResolverTypeWrapper<KnowledgeBaseCategoryType>;
  KnowledgeBaseLevelStatusDataType: ResolverTypeWrapper<KnowledgeBaseLevelStatusDataType>;
  KnowledgeBaseLevelStatusHybridType: ResolverTypeWrapper<KnowledgeBaseLevelStatusHybridType>;
  KnowledgeBaseLevelStatusType: ResolverTypeWrapper<KnowledgeBaseLevelStatusType>;
  KnowledgeBaseList: ResolverTypeWrapper<KnowledgeBaseList>;
  KnowledgeBaseListCondition: KnowledgeBaseListCondition;
  KnowledgeBaseListInput: KnowledgeBaseListInput;
  KnowledgeBaseListPatch: KnowledgeBaseListPatch;
  KnowledgeBaseListType: ResolverTypeWrapper<KnowledgeBaseListType>;
  KnowledgeBaseListsConnection: ResolverTypeWrapper<KnowledgeBaseListsConnection>;
  KnowledgeBaseListsEdge: ResolverTypeWrapper<KnowledgeBaseListsEdge>;
  KnowledgeBaseListsOrderBy: KnowledgeBaseListsOrderBy;
  KnowledgeBaseTranslation: ResolverTypeWrapper<KnowledgeBaseTranslation>;
  KnowledgeBaseTranslationCondition: KnowledgeBaseTranslationCondition;
  KnowledgeBaseTranslationInput: KnowledgeBaseTranslationInput;
  KnowledgeBaseTranslationPatch: KnowledgeBaseTranslationPatch;
  KnowledgeBaseTranslationsConnection: ResolverTypeWrapper<KnowledgeBaseTranslationsConnection>;
  KnowledgeBaseTranslationsEdge: ResolverTypeWrapper<KnowledgeBaseTranslationsEdge>;
  KnowledgeBaseTranslationsOrderBy: KnowledgeBaseTranslationsOrderBy;
  KnowledgeBasesConnection: ResolverTypeWrapper<KnowledgeBasesConnection>;
  KnowledgeBasesEdge: ResolverTypeWrapper<KnowledgeBasesEdge>;
  KnowledgeBasesOrderBy: KnowledgeBasesOrderBy;
  KnowledgeBasis: ResolverTypeWrapper<KnowledgeBasis>;
  KnowledgeBasisCondition: KnowledgeBasisCondition;
  KnowledgeBasisInput: KnowledgeBasisInput;
  KnowledgeBasisPatch: KnowledgeBasisPatch;
  Knowledgebase: ResolverTypeWrapper<Knowledgebase>;
  KnowledgebaseCreateLocale: KnowledgebaseCreateLocale;
  KnowledgebaseTranslationStatusColor: ResolverTypeWrapper<KnowledgebaseTranslationStatusColor>;
  KnowledgebaseTranslationType: ResolverTypeWrapper<KnowledgebaseTranslationType>;
  Locale: ResolverTypeWrapper<Locale>;
  LocaleCondition: LocaleCondition;
  LocaleInput: LocaleInput;
  LocalePatch: LocalePatch;
  LocalesConnection: ResolverTypeWrapper<LocalesConnection>;
  LocalesEdge: ResolverTypeWrapper<LocalesEdge>;
  LocalesOrderBy: LocalesOrderBy;
  Mutation: ResolverTypeWrapper<{}>;
  Node: ResolversTypes['ActivityStream'] | ResolversTypes['KnowledgeBaseArticle'] | ResolversTypes['KnowledgeBaseArticleDelayedJob'] | ResolversTypes['KnowledgeBaseArticleTranslation'] | ResolversTypes['KnowledgeBaseCategory'] | ResolversTypes['KnowledgeBaseCategoryDelayedJob'] | ResolversTypes['KnowledgeBaseCategoryTranslation'] | ResolversTypes['KnowledgeBaseList'] | ResolversTypes['KnowledgeBaseTranslation'] | ResolversTypes['KnowledgeBasis'] | ResolversTypes['Locale'] | ResolversTypes['Query'];
  Order: ResolverTypeWrapper<Order>;
  OrderInput: OrderInput;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Pet: ResolverTypeWrapper<Pet>;
  Query: ResolverTypeWrapper<{}>;
  Response: ResolverTypeWrapper<Response>;
  Status: Status;
  Status3: Status3;
  Status4ListItem: Status4ListItem;
  StatusMessageForKnowledgeBaseCategoryScheduleType: ResolverTypeWrapper<StatusMessageForKnowledgeBaseCategoryScheduleType>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Tag: ResolverTypeWrapper<Tag>;
  UpdateActivityStreamByIdInput: UpdateActivityStreamByIdInput;
  UpdateActivityStreamInput: UpdateActivityStreamInput;
  UpdateActivityStreamPayload: ResolverTypeWrapper<UpdateActivityStreamPayload>;
  UpdateKnowledgeBaseArticleByIdInput: UpdateKnowledgeBaseArticleByIdInput;
  UpdateKnowledgeBaseArticleDelayedJobByIdInput: UpdateKnowledgeBaseArticleDelayedJobByIdInput;
  UpdateKnowledgeBaseArticleDelayedJobInput: UpdateKnowledgeBaseArticleDelayedJobInput;
  UpdateKnowledgeBaseArticleDelayedJobPayload: ResolverTypeWrapper<UpdateKnowledgeBaseArticleDelayedJobPayload>;
  UpdateKnowledgeBaseArticleInput: UpdateKnowledgeBaseArticleInput;
  UpdateKnowledgeBaseArticlePayload: ResolverTypeWrapper<UpdateKnowledgeBaseArticlePayload>;
  UpdateKnowledgeBaseArticleTranslationByIdInput: UpdateKnowledgeBaseArticleTranslationByIdInput;
  UpdateKnowledgeBaseArticleTranslationInput: UpdateKnowledgeBaseArticleTranslationInput;
  UpdateKnowledgeBaseArticleTranslationPayload: ResolverTypeWrapper<UpdateKnowledgeBaseArticleTranslationPayload>;
  UpdateKnowledgeBaseCategoryByIdInput: UpdateKnowledgeBaseCategoryByIdInput;
  UpdateKnowledgeBaseCategoryDelayedJobByIdInput: UpdateKnowledgeBaseCategoryDelayedJobByIdInput;
  UpdateKnowledgeBaseCategoryDelayedJobInput: UpdateKnowledgeBaseCategoryDelayedJobInput;
  UpdateKnowledgeBaseCategoryDelayedJobPayload: ResolverTypeWrapper<UpdateKnowledgeBaseCategoryDelayedJobPayload>;
  UpdateKnowledgeBaseCategoryInput: UpdateKnowledgeBaseCategoryInput;
  UpdateKnowledgeBaseCategoryPayload: ResolverTypeWrapper<UpdateKnowledgeBaseCategoryPayload>;
  UpdateKnowledgeBaseCategoryTranslationByIdInput: UpdateKnowledgeBaseCategoryTranslationByIdInput;
  UpdateKnowledgeBaseCategoryTranslationInput: UpdateKnowledgeBaseCategoryTranslationInput;
  UpdateKnowledgeBaseCategoryTranslationPayload: ResolverTypeWrapper<UpdateKnowledgeBaseCategoryTranslationPayload>;
  UpdateKnowledgeBaseListByIdInput: UpdateKnowledgeBaseListByIdInput;
  UpdateKnowledgeBaseListInput: UpdateKnowledgeBaseListInput;
  UpdateKnowledgeBaseListPayload: ResolverTypeWrapper<UpdateKnowledgeBaseListPayload>;
  UpdateKnowledgeBaseTranslationByIdInput: UpdateKnowledgeBaseTranslationByIdInput;
  UpdateKnowledgeBaseTranslationInput: UpdateKnowledgeBaseTranslationInput;
  UpdateKnowledgeBaseTranslationPayload: ResolverTypeWrapper<UpdateKnowledgeBaseTranslationPayload>;
  UpdateKnowledgeBasisByIdInput: UpdateKnowledgeBasisByIdInput;
  UpdateKnowledgeBasisInput: UpdateKnowledgeBasisInput;
  UpdateKnowledgeBasisPayload: ResolverTypeWrapper<UpdateKnowledgeBasisPayload>;
  UpdateLocaleByIdInput: UpdateLocaleByIdInput;
  UpdateLocaleInput: UpdateLocaleInput;
  UpdateLocalePayload: ResolverTypeWrapper<UpdateLocalePayload>;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  User: ResolverTypeWrapper<User>;
  UserInput: UserInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  ActivityStream: ActivityStream;
  ActivityStreamCondition: ActivityStreamCondition;
  ActivityStreamInput: ActivityStreamInput;
  ActivityStreamPatch: ActivityStreamPatch;
  ActivityStreamsConnection: ActivityStreamsConnection;
  ActivityStreamsEdge: ActivityStreamsEdge;
  ApiResponse: ApiResponse;
  Boolean: Scalars['Boolean'];
  Category: Category;
  CreateActivityStreamInput: CreateActivityStreamInput;
  CreateActivityStreamPayload: CreateActivityStreamPayload;
  CreateKnowledgeBaseArticleDelayedJobInput: CreateKnowledgeBaseArticleDelayedJobInput;
  CreateKnowledgeBaseArticleDelayedJobPayload: CreateKnowledgeBaseArticleDelayedJobPayload;
  CreateKnowledgeBaseArticleInput: CreateKnowledgeBaseArticleInput;
  CreateKnowledgeBaseArticlePayload: CreateKnowledgeBaseArticlePayload;
  CreateKnowledgeBaseArticleTranslationInput: CreateKnowledgeBaseArticleTranslationInput;
  CreateKnowledgeBaseArticleTranslationPayload: CreateKnowledgeBaseArticleTranslationPayload;
  CreateKnowledgeBaseCategoryDelayedJobInput: CreateKnowledgeBaseCategoryDelayedJobInput;
  CreateKnowledgeBaseCategoryDelayedJobPayload: CreateKnowledgeBaseCategoryDelayedJobPayload;
  CreateKnowledgeBaseCategoryInput: CreateKnowledgeBaseCategoryInput;
  CreateKnowledgeBaseCategoryPayload: CreateKnowledgeBaseCategoryPayload;
  CreateKnowledgeBaseCategoryTranslationInput: CreateKnowledgeBaseCategoryTranslationInput;
  CreateKnowledgeBaseCategoryTranslationPayload: CreateKnowledgeBaseCategoryTranslationPayload;
  CreateKnowledgeBaseListInput: CreateKnowledgeBaseListInput;
  CreateKnowledgeBaseListPayload: CreateKnowledgeBaseListPayload;
  CreateKnowledgeBaseTranslationInput: CreateKnowledgeBaseTranslationInput;
  CreateKnowledgeBaseTranslationPayload: CreateKnowledgeBaseTranslationPayload;
  CreateKnowledgeBasisInput: CreateKnowledgeBasisInput;
  CreateKnowledgeBasisPayload: CreateKnowledgeBasisPayload;
  CreateLocaleInput: CreateLocaleInput;
  CreateLocalePayload: CreateLocalePayload;
  Cursor: Scalars['Cursor'];
  Datetime: Scalars['Datetime'];
  DeleteActivityStreamByIdInput: DeleteActivityStreamByIdInput;
  DeleteActivityStreamInput: DeleteActivityStreamInput;
  DeleteActivityStreamPayload: DeleteActivityStreamPayload;
  DeleteKnowledgeBaseArticleByIdInput: DeleteKnowledgeBaseArticleByIdInput;
  DeleteKnowledgeBaseArticleDelayedJobByIdInput: DeleteKnowledgeBaseArticleDelayedJobByIdInput;
  DeleteKnowledgeBaseArticleDelayedJobInput: DeleteKnowledgeBaseArticleDelayedJobInput;
  DeleteKnowledgeBaseArticleDelayedJobPayload: DeleteKnowledgeBaseArticleDelayedJobPayload;
  DeleteKnowledgeBaseArticleInput: DeleteKnowledgeBaseArticleInput;
  DeleteKnowledgeBaseArticlePayload: DeleteKnowledgeBaseArticlePayload;
  DeleteKnowledgeBaseArticleTranslationByIdInput: DeleteKnowledgeBaseArticleTranslationByIdInput;
  DeleteKnowledgeBaseArticleTranslationInput: DeleteKnowledgeBaseArticleTranslationInput;
  DeleteKnowledgeBaseArticleTranslationPayload: DeleteKnowledgeBaseArticleTranslationPayload;
  DeleteKnowledgeBaseCategoryByIdInput: DeleteKnowledgeBaseCategoryByIdInput;
  DeleteKnowledgeBaseCategoryDelayedJobByIdInput: DeleteKnowledgeBaseCategoryDelayedJobByIdInput;
  DeleteKnowledgeBaseCategoryDelayedJobInput: DeleteKnowledgeBaseCategoryDelayedJobInput;
  DeleteKnowledgeBaseCategoryDelayedJobPayload: DeleteKnowledgeBaseCategoryDelayedJobPayload;
  DeleteKnowledgeBaseCategoryInput: DeleteKnowledgeBaseCategoryInput;
  DeleteKnowledgeBaseCategoryPayload: DeleteKnowledgeBaseCategoryPayload;
  DeleteKnowledgeBaseCategoryTranslationByIdInput: DeleteKnowledgeBaseCategoryTranslationByIdInput;
  DeleteKnowledgeBaseCategoryTranslationInput: DeleteKnowledgeBaseCategoryTranslationInput;
  DeleteKnowledgeBaseCategoryTranslationPayload: DeleteKnowledgeBaseCategoryTranslationPayload;
  DeleteKnowledgeBaseListByIdInput: DeleteKnowledgeBaseListByIdInput;
  DeleteKnowledgeBaseListInput: DeleteKnowledgeBaseListInput;
  DeleteKnowledgeBaseListPayload: DeleteKnowledgeBaseListPayload;
  DeleteKnowledgeBaseTranslationByIdInput: DeleteKnowledgeBaseTranslationByIdInput;
  DeleteKnowledgeBaseTranslationInput: DeleteKnowledgeBaseTranslationInput;
  DeleteKnowledgeBaseTranslationPayload: DeleteKnowledgeBaseTranslationPayload;
  DeleteKnowledgeBasisByIdInput: DeleteKnowledgeBasisByIdInput;
  DeleteKnowledgeBasisInput: DeleteKnowledgeBasisInput;
  DeleteKnowledgeBasisPayload: DeleteKnowledgeBasisPayload;
  DeleteLocaleByIdInput: DeleteLocaleByIdInput;
  DeleteLocaleInput: DeleteLocaleInput;
  DeleteLocalePayload: DeleteLocalePayload;
  ExportKnowledgeBaseType: ExportKnowledgeBaseType;
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  JSON: Scalars['JSON'];
  KnowledgeBaseArticle: KnowledgeBaseArticle;
  KnowledgeBaseArticleCondition: KnowledgeBaseArticleCondition;
  KnowledgeBaseArticleDelayedJob: KnowledgeBaseArticleDelayedJob;
  KnowledgeBaseArticleDelayedJobCondition: KnowledgeBaseArticleDelayedJobCondition;
  KnowledgeBaseArticleDelayedJobInput: KnowledgeBaseArticleDelayedJobInput;
  KnowledgeBaseArticleDelayedJobPatch: KnowledgeBaseArticleDelayedJobPatch;
  KnowledgeBaseArticleDelayedJobType: KnowledgeBaseArticleDelayedJobType;
  KnowledgeBaseArticleDelayedJobsConnection: KnowledgeBaseArticleDelayedJobsConnection;
  KnowledgeBaseArticleDelayedJobsEdge: KnowledgeBaseArticleDelayedJobsEdge;
  KnowledgeBaseArticleInput: KnowledgeBaseArticleInput;
  KnowledgeBaseArticlePatch: KnowledgeBaseArticlePatch;
  KnowledgeBaseArticleTranslation: KnowledgeBaseArticleTranslation;
  KnowledgeBaseArticleTranslationCondition: KnowledgeBaseArticleTranslationCondition;
  KnowledgeBaseArticleTranslationInput: KnowledgeBaseArticleTranslationInput;
  KnowledgeBaseArticleTranslationPatch: KnowledgeBaseArticleTranslationPatch;
  KnowledgeBaseArticleTranslationTypeInput: KnowledgeBaseArticleTranslationTypeInput;
  KnowledgeBaseArticleTranslationsConnection: KnowledgeBaseArticleTranslationsConnection;
  KnowledgeBaseArticleTranslationsEdge: KnowledgeBaseArticleTranslationsEdge;
  KnowledgeBaseArticleType: KnowledgeBaseArticleType;
  KnowledgeBaseArticlesConnection: KnowledgeBaseArticlesConnection;
  KnowledgeBaseArticlesEdge: KnowledgeBaseArticlesEdge;
  KnowledgeBaseCategoriesConnection: KnowledgeBaseCategoriesConnection;
  KnowledgeBaseCategoriesEdge: KnowledgeBaseCategoriesEdge;
  KnowledgeBaseCategory: KnowledgeBaseCategory;
  KnowledgeBaseCategoryCondition: KnowledgeBaseCategoryCondition;
  KnowledgeBaseCategoryDelayedJob: KnowledgeBaseCategoryDelayedJob;
  KnowledgeBaseCategoryDelayedJobCondition: KnowledgeBaseCategoryDelayedJobCondition;
  KnowledgeBaseCategoryDelayedJobInput: KnowledgeBaseCategoryDelayedJobInput;
  KnowledgeBaseCategoryDelayedJobPatch: KnowledgeBaseCategoryDelayedJobPatch;
  KnowledgeBaseCategoryDelayedJobsConnection: KnowledgeBaseCategoryDelayedJobsConnection;
  KnowledgeBaseCategoryDelayedJobsEdge: KnowledgeBaseCategoryDelayedJobsEdge;
  KnowledgeBaseCategoryHybridStatType: KnowledgeBaseCategoryHybridStatType;
  KnowledgeBaseCategoryHybridType: KnowledgeBaseCategoryHybridType;
  KnowledgeBaseCategoryInfoType: KnowledgeBaseCategoryInfoType;
  KnowledgeBaseCategoryInput: KnowledgeBaseCategoryInput;
  KnowledgeBaseCategoryLevelType: KnowledgeBaseCategoryLevelType;
  KnowledgeBaseCategoryPatch: KnowledgeBaseCategoryPatch;
  KnowledgeBaseCategoryScheduleType: KnowledgeBaseCategoryScheduleType;
  KnowledgeBaseCategoryStatType: KnowledgeBaseCategoryStatType;
  KnowledgeBaseCategoryTranslation: KnowledgeBaseCategoryTranslation;
  KnowledgeBaseCategoryTranslationCondition: KnowledgeBaseCategoryTranslationCondition;
  KnowledgeBaseCategoryTranslationInput: KnowledgeBaseCategoryTranslationInput;
  KnowledgeBaseCategoryTranslationPatch: KnowledgeBaseCategoryTranslationPatch;
  KnowledgeBaseCategoryTranslationType: KnowledgeBaseCategoryTranslationType;
  KnowledgeBaseCategoryTranslationTypeInput: KnowledgeBaseCategoryTranslationTypeInput;
  KnowledgeBaseCategoryTranslationsConnection: KnowledgeBaseCategoryTranslationsConnection;
  KnowledgeBaseCategoryTranslationsEdge: KnowledgeBaseCategoryTranslationsEdge;
  KnowledgeBaseCategoryType: KnowledgeBaseCategoryType;
  KnowledgeBaseLevelStatusDataType: KnowledgeBaseLevelStatusDataType;
  KnowledgeBaseLevelStatusHybridType: KnowledgeBaseLevelStatusHybridType;
  KnowledgeBaseLevelStatusType: KnowledgeBaseLevelStatusType;
  KnowledgeBaseList: KnowledgeBaseList;
  KnowledgeBaseListCondition: KnowledgeBaseListCondition;
  KnowledgeBaseListInput: KnowledgeBaseListInput;
  KnowledgeBaseListPatch: KnowledgeBaseListPatch;
  KnowledgeBaseListType: KnowledgeBaseListType;
  KnowledgeBaseListsConnection: KnowledgeBaseListsConnection;
  KnowledgeBaseListsEdge: KnowledgeBaseListsEdge;
  KnowledgeBaseTranslation: KnowledgeBaseTranslation;
  KnowledgeBaseTranslationCondition: KnowledgeBaseTranslationCondition;
  KnowledgeBaseTranslationInput: KnowledgeBaseTranslationInput;
  KnowledgeBaseTranslationPatch: KnowledgeBaseTranslationPatch;
  KnowledgeBaseTranslationsConnection: KnowledgeBaseTranslationsConnection;
  KnowledgeBaseTranslationsEdge: KnowledgeBaseTranslationsEdge;
  KnowledgeBasesConnection: KnowledgeBasesConnection;
  KnowledgeBasesEdge: KnowledgeBasesEdge;
  KnowledgeBasis: KnowledgeBasis;
  KnowledgeBasisCondition: KnowledgeBasisCondition;
  KnowledgeBasisInput: KnowledgeBasisInput;
  KnowledgeBasisPatch: KnowledgeBasisPatch;
  Knowledgebase: Knowledgebase;
  KnowledgebaseCreateLocale: KnowledgebaseCreateLocale;
  KnowledgebaseTranslationStatusColor: KnowledgebaseTranslationStatusColor;
  KnowledgebaseTranslationType: KnowledgebaseTranslationType;
  Locale: Locale;
  LocaleCondition: LocaleCondition;
  LocaleInput: LocaleInput;
  LocalePatch: LocalePatch;
  LocalesConnection: LocalesConnection;
  LocalesEdge: LocalesEdge;
  Mutation: {};
  Node: ResolversParentTypes['ActivityStream'] | ResolversParentTypes['KnowledgeBaseArticle'] | ResolversParentTypes['KnowledgeBaseArticleDelayedJob'] | ResolversParentTypes['KnowledgeBaseArticleTranslation'] | ResolversParentTypes['KnowledgeBaseCategory'] | ResolversParentTypes['KnowledgeBaseCategoryDelayedJob'] | ResolversParentTypes['KnowledgeBaseCategoryTranslation'] | ResolversParentTypes['KnowledgeBaseList'] | ResolversParentTypes['KnowledgeBaseTranslation'] | ResolversParentTypes['KnowledgeBasis'] | ResolversParentTypes['Locale'] | ResolversParentTypes['Query'];
  Order: Order;
  OrderInput: OrderInput;
  PageInfo: PageInfo;
  Pet: Pet;
  Query: {};
  Response: Response;
  StatusMessageForKnowledgeBaseCategoryScheduleType: StatusMessageForKnowledgeBaseCategoryScheduleType;
  String: Scalars['String'];
  Tag: Tag;
  UpdateActivityStreamByIdInput: UpdateActivityStreamByIdInput;
  UpdateActivityStreamInput: UpdateActivityStreamInput;
  UpdateActivityStreamPayload: UpdateActivityStreamPayload;
  UpdateKnowledgeBaseArticleByIdInput: UpdateKnowledgeBaseArticleByIdInput;
  UpdateKnowledgeBaseArticleDelayedJobByIdInput: UpdateKnowledgeBaseArticleDelayedJobByIdInput;
  UpdateKnowledgeBaseArticleDelayedJobInput: UpdateKnowledgeBaseArticleDelayedJobInput;
  UpdateKnowledgeBaseArticleDelayedJobPayload: UpdateKnowledgeBaseArticleDelayedJobPayload;
  UpdateKnowledgeBaseArticleInput: UpdateKnowledgeBaseArticleInput;
  UpdateKnowledgeBaseArticlePayload: UpdateKnowledgeBaseArticlePayload;
  UpdateKnowledgeBaseArticleTranslationByIdInput: UpdateKnowledgeBaseArticleTranslationByIdInput;
  UpdateKnowledgeBaseArticleTranslationInput: UpdateKnowledgeBaseArticleTranslationInput;
  UpdateKnowledgeBaseArticleTranslationPayload: UpdateKnowledgeBaseArticleTranslationPayload;
  UpdateKnowledgeBaseCategoryByIdInput: UpdateKnowledgeBaseCategoryByIdInput;
  UpdateKnowledgeBaseCategoryDelayedJobByIdInput: UpdateKnowledgeBaseCategoryDelayedJobByIdInput;
  UpdateKnowledgeBaseCategoryDelayedJobInput: UpdateKnowledgeBaseCategoryDelayedJobInput;
  UpdateKnowledgeBaseCategoryDelayedJobPayload: UpdateKnowledgeBaseCategoryDelayedJobPayload;
  UpdateKnowledgeBaseCategoryInput: UpdateKnowledgeBaseCategoryInput;
  UpdateKnowledgeBaseCategoryPayload: UpdateKnowledgeBaseCategoryPayload;
  UpdateKnowledgeBaseCategoryTranslationByIdInput: UpdateKnowledgeBaseCategoryTranslationByIdInput;
  UpdateKnowledgeBaseCategoryTranslationInput: UpdateKnowledgeBaseCategoryTranslationInput;
  UpdateKnowledgeBaseCategoryTranslationPayload: UpdateKnowledgeBaseCategoryTranslationPayload;
  UpdateKnowledgeBaseListByIdInput: UpdateKnowledgeBaseListByIdInput;
  UpdateKnowledgeBaseListInput: UpdateKnowledgeBaseListInput;
  UpdateKnowledgeBaseListPayload: UpdateKnowledgeBaseListPayload;
  UpdateKnowledgeBaseTranslationByIdInput: UpdateKnowledgeBaseTranslationByIdInput;
  UpdateKnowledgeBaseTranslationInput: UpdateKnowledgeBaseTranslationInput;
  UpdateKnowledgeBaseTranslationPayload: UpdateKnowledgeBaseTranslationPayload;
  UpdateKnowledgeBasisByIdInput: UpdateKnowledgeBasisByIdInput;
  UpdateKnowledgeBasisInput: UpdateKnowledgeBasisInput;
  UpdateKnowledgeBasisPayload: UpdateKnowledgeBasisPayload;
  UpdateLocaleByIdInput: UpdateLocaleByIdInput;
  UpdateLocaleInput: UpdateLocaleInput;
  UpdateLocalePayload: UpdateLocalePayload;
  Upload: Scalars['Upload'];
  User: User;
  UserInput: UserInput;
};

export type ActivityStreamResolvers<ContextType = any, ParentType extends ResolversParentTypes['ActivityStream'] = ResolversParentTypes['ActivityStream']> = {
  activityName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  activityType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActivityStreamsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ActivityStreamsConnection'] = ResolversParentTypes['ActivityStreamsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ActivityStreamsEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['ActivityStream']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActivityStreamsEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ActivityStreamsEdge'] = ResolversParentTypes['ActivityStreamsEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['ActivityStream']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApiResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApiResponse'] = ResolversParentTypes['ApiResponse']> = {
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateActivityStreamPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateActivityStreamPayload'] = ResolversParentTypes['CreateActivityStreamPayload']> = {
  activityStream?: Resolver<Maybe<ResolversTypes['ActivityStream']>, ParentType, ContextType>;
  activityStreamEdge?: Resolver<Maybe<ResolversTypes['ActivityStreamsEdge']>, ParentType, ContextType, RequireFields<CreateActivityStreamPayloadActivityStreamEdgeArgs, 'orderBy'>>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateKnowledgeBaseArticleDelayedJobPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateKnowledgeBaseArticleDelayedJobPayload'] = ResolversParentTypes['CreateKnowledgeBaseArticleDelayedJobPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  knowledgeBaseArticleDelayedJob?: Resolver<Maybe<ResolversTypes['KnowledgeBaseArticleDelayedJob']>, ParentType, ContextType>;
  knowledgeBaseArticleDelayedJobEdge?: Resolver<Maybe<ResolversTypes['KnowledgeBaseArticleDelayedJobsEdge']>, ParentType, ContextType, RequireFields<CreateKnowledgeBaseArticleDelayedJobPayloadKnowledgeBaseArticleDelayedJobEdgeArgs, 'orderBy'>>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateKnowledgeBaseArticlePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateKnowledgeBaseArticlePayload'] = ResolversParentTypes['CreateKnowledgeBaseArticlePayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  knowledgeBaseArticle?: Resolver<Maybe<ResolversTypes['KnowledgeBaseArticle']>, ParentType, ContextType>;
  knowledgeBaseArticleEdge?: Resolver<Maybe<ResolversTypes['KnowledgeBaseArticlesEdge']>, ParentType, ContextType, RequireFields<CreateKnowledgeBaseArticlePayloadKnowledgeBaseArticleEdgeArgs, 'orderBy'>>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateKnowledgeBaseArticleTranslationPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateKnowledgeBaseArticleTranslationPayload'] = ResolversParentTypes['CreateKnowledgeBaseArticleTranslationPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  knowledgeBaseArticleTranslation?: Resolver<Maybe<ResolversTypes['KnowledgeBaseArticleTranslation']>, ParentType, ContextType>;
  knowledgeBaseArticleTranslationEdge?: Resolver<Maybe<ResolversTypes['KnowledgeBaseArticleTranslationsEdge']>, ParentType, ContextType, RequireFields<CreateKnowledgeBaseArticleTranslationPayloadKnowledgeBaseArticleTranslationEdgeArgs, 'orderBy'>>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateKnowledgeBaseCategoryDelayedJobPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateKnowledgeBaseCategoryDelayedJobPayload'] = ResolversParentTypes['CreateKnowledgeBaseCategoryDelayedJobPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  knowledgeBaseCategoryDelayedJob?: Resolver<Maybe<ResolversTypes['KnowledgeBaseCategoryDelayedJob']>, ParentType, ContextType>;
  knowledgeBaseCategoryDelayedJobEdge?: Resolver<Maybe<ResolversTypes['KnowledgeBaseCategoryDelayedJobsEdge']>, ParentType, ContextType, RequireFields<CreateKnowledgeBaseCategoryDelayedJobPayloadKnowledgeBaseCategoryDelayedJobEdgeArgs, 'orderBy'>>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateKnowledgeBaseCategoryPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateKnowledgeBaseCategoryPayload'] = ResolversParentTypes['CreateKnowledgeBaseCategoryPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  knowledgeBaseCategory?: Resolver<Maybe<ResolversTypes['KnowledgeBaseCategory']>, ParentType, ContextType>;
  knowledgeBaseCategoryEdge?: Resolver<Maybe<ResolversTypes['KnowledgeBaseCategoriesEdge']>, ParentType, ContextType, RequireFields<CreateKnowledgeBaseCategoryPayloadKnowledgeBaseCategoryEdgeArgs, 'orderBy'>>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateKnowledgeBaseCategoryTranslationPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateKnowledgeBaseCategoryTranslationPayload'] = ResolversParentTypes['CreateKnowledgeBaseCategoryTranslationPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  knowledgeBaseCategoryTranslation?: Resolver<Maybe<ResolversTypes['KnowledgeBaseCategoryTranslation']>, ParentType, ContextType>;
  knowledgeBaseCategoryTranslationEdge?: Resolver<Maybe<ResolversTypes['KnowledgeBaseCategoryTranslationsEdge']>, ParentType, ContextType, RequireFields<CreateKnowledgeBaseCategoryTranslationPayloadKnowledgeBaseCategoryTranslationEdgeArgs, 'orderBy'>>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateKnowledgeBaseListPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateKnowledgeBaseListPayload'] = ResolversParentTypes['CreateKnowledgeBaseListPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  knowledgeBaseList?: Resolver<Maybe<ResolversTypes['KnowledgeBaseList']>, ParentType, ContextType>;
  knowledgeBaseListEdge?: Resolver<Maybe<ResolversTypes['KnowledgeBaseListsEdge']>, ParentType, ContextType, RequireFields<CreateKnowledgeBaseListPayloadKnowledgeBaseListEdgeArgs, 'orderBy'>>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateKnowledgeBaseTranslationPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateKnowledgeBaseTranslationPayload'] = ResolversParentTypes['CreateKnowledgeBaseTranslationPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  knowledgeBaseTranslation?: Resolver<Maybe<ResolversTypes['KnowledgeBaseTranslation']>, ParentType, ContextType>;
  knowledgeBaseTranslationEdge?: Resolver<Maybe<ResolversTypes['KnowledgeBaseTranslationsEdge']>, ParentType, ContextType, RequireFields<CreateKnowledgeBaseTranslationPayloadKnowledgeBaseTranslationEdgeArgs, 'orderBy'>>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateKnowledgeBasisPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateKnowledgeBasisPayload'] = ResolversParentTypes['CreateKnowledgeBasisPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  knowledgeBasis?: Resolver<Maybe<ResolversTypes['KnowledgeBasis']>, ParentType, ContextType>;
  knowledgeBasisEdge?: Resolver<Maybe<ResolversTypes['KnowledgeBasesEdge']>, ParentType, ContextType, RequireFields<CreateKnowledgeBasisPayloadKnowledgeBasisEdgeArgs, 'orderBy'>>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateLocalePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateLocalePayload'] = ResolversParentTypes['CreateLocalePayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  locale?: Resolver<Maybe<ResolversTypes['Locale']>, ParentType, ContextType>;
  localeEdge?: Resolver<Maybe<ResolversTypes['LocalesEdge']>, ParentType, ContextType, RequireFields<CreateLocalePayloadLocaleEdgeArgs, 'orderBy'>>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface CursorScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Cursor'], any> {
  name: 'Cursor';
}

export interface DatetimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Datetime'], any> {
  name: 'Datetime';
}

export type DeleteActivityStreamPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteActivityStreamPayload'] = ResolversParentTypes['DeleteActivityStreamPayload']> = {
  activityStream?: Resolver<Maybe<ResolversTypes['ActivityStream']>, ParentType, ContextType>;
  activityStreamEdge?: Resolver<Maybe<ResolversTypes['ActivityStreamsEdge']>, ParentType, ContextType, RequireFields<DeleteActivityStreamPayloadActivityStreamEdgeArgs, 'orderBy'>>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deletedActivityStreamId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteKnowledgeBaseArticleDelayedJobPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteKnowledgeBaseArticleDelayedJobPayload'] = ResolversParentTypes['DeleteKnowledgeBaseArticleDelayedJobPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deletedKnowledgeBaseArticleDelayedJobId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  knowledgeBaseArticleDelayedJob?: Resolver<Maybe<ResolversTypes['KnowledgeBaseArticleDelayedJob']>, ParentType, ContextType>;
  knowledgeBaseArticleDelayedJobEdge?: Resolver<Maybe<ResolversTypes['KnowledgeBaseArticleDelayedJobsEdge']>, ParentType, ContextType, RequireFields<DeleteKnowledgeBaseArticleDelayedJobPayloadKnowledgeBaseArticleDelayedJobEdgeArgs, 'orderBy'>>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteKnowledgeBaseArticlePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteKnowledgeBaseArticlePayload'] = ResolversParentTypes['DeleteKnowledgeBaseArticlePayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deletedKnowledgeBaseArticleId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  knowledgeBaseArticle?: Resolver<Maybe<ResolversTypes['KnowledgeBaseArticle']>, ParentType, ContextType>;
  knowledgeBaseArticleEdge?: Resolver<Maybe<ResolversTypes['KnowledgeBaseArticlesEdge']>, ParentType, ContextType, RequireFields<DeleteKnowledgeBaseArticlePayloadKnowledgeBaseArticleEdgeArgs, 'orderBy'>>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteKnowledgeBaseArticleTranslationPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteKnowledgeBaseArticleTranslationPayload'] = ResolversParentTypes['DeleteKnowledgeBaseArticleTranslationPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deletedKnowledgeBaseArticleTranslationId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  knowledgeBaseArticleTranslation?: Resolver<Maybe<ResolversTypes['KnowledgeBaseArticleTranslation']>, ParentType, ContextType>;
  knowledgeBaseArticleTranslationEdge?: Resolver<Maybe<ResolversTypes['KnowledgeBaseArticleTranslationsEdge']>, ParentType, ContextType, RequireFields<DeleteKnowledgeBaseArticleTranslationPayloadKnowledgeBaseArticleTranslationEdgeArgs, 'orderBy'>>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteKnowledgeBaseCategoryDelayedJobPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteKnowledgeBaseCategoryDelayedJobPayload'] = ResolversParentTypes['DeleteKnowledgeBaseCategoryDelayedJobPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deletedKnowledgeBaseCategoryDelayedJobId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  knowledgeBaseCategoryDelayedJob?: Resolver<Maybe<ResolversTypes['KnowledgeBaseCategoryDelayedJob']>, ParentType, ContextType>;
  knowledgeBaseCategoryDelayedJobEdge?: Resolver<Maybe<ResolversTypes['KnowledgeBaseCategoryDelayedJobsEdge']>, ParentType, ContextType, RequireFields<DeleteKnowledgeBaseCategoryDelayedJobPayloadKnowledgeBaseCategoryDelayedJobEdgeArgs, 'orderBy'>>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteKnowledgeBaseCategoryPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteKnowledgeBaseCategoryPayload'] = ResolversParentTypes['DeleteKnowledgeBaseCategoryPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deletedKnowledgeBaseCategoryId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  knowledgeBaseCategory?: Resolver<Maybe<ResolversTypes['KnowledgeBaseCategory']>, ParentType, ContextType>;
  knowledgeBaseCategoryEdge?: Resolver<Maybe<ResolversTypes['KnowledgeBaseCategoriesEdge']>, ParentType, ContextType, RequireFields<DeleteKnowledgeBaseCategoryPayloadKnowledgeBaseCategoryEdgeArgs, 'orderBy'>>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteKnowledgeBaseCategoryTranslationPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteKnowledgeBaseCategoryTranslationPayload'] = ResolversParentTypes['DeleteKnowledgeBaseCategoryTranslationPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deletedKnowledgeBaseCategoryTranslationId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  knowledgeBaseCategoryTranslation?: Resolver<Maybe<ResolversTypes['KnowledgeBaseCategoryTranslation']>, ParentType, ContextType>;
  knowledgeBaseCategoryTranslationEdge?: Resolver<Maybe<ResolversTypes['KnowledgeBaseCategoryTranslationsEdge']>, ParentType, ContextType, RequireFields<DeleteKnowledgeBaseCategoryTranslationPayloadKnowledgeBaseCategoryTranslationEdgeArgs, 'orderBy'>>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteKnowledgeBaseListPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteKnowledgeBaseListPayload'] = ResolversParentTypes['DeleteKnowledgeBaseListPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deletedKnowledgeBaseListId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  knowledgeBaseList?: Resolver<Maybe<ResolversTypes['KnowledgeBaseList']>, ParentType, ContextType>;
  knowledgeBaseListEdge?: Resolver<Maybe<ResolversTypes['KnowledgeBaseListsEdge']>, ParentType, ContextType, RequireFields<DeleteKnowledgeBaseListPayloadKnowledgeBaseListEdgeArgs, 'orderBy'>>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteKnowledgeBaseTranslationPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteKnowledgeBaseTranslationPayload'] = ResolversParentTypes['DeleteKnowledgeBaseTranslationPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deletedKnowledgeBaseTranslationId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  knowledgeBaseTranslation?: Resolver<Maybe<ResolversTypes['KnowledgeBaseTranslation']>, ParentType, ContextType>;
  knowledgeBaseTranslationEdge?: Resolver<Maybe<ResolversTypes['KnowledgeBaseTranslationsEdge']>, ParentType, ContextType, RequireFields<DeleteKnowledgeBaseTranslationPayloadKnowledgeBaseTranslationEdgeArgs, 'orderBy'>>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteKnowledgeBasisPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteKnowledgeBasisPayload'] = ResolversParentTypes['DeleteKnowledgeBasisPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deletedKnowledgeBasisId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  knowledgeBasis?: Resolver<Maybe<ResolversTypes['KnowledgeBasis']>, ParentType, ContextType>;
  knowledgeBasisEdge?: Resolver<Maybe<ResolversTypes['KnowledgeBasesEdge']>, ParentType, ContextType, RequireFields<DeleteKnowledgeBasisPayloadKnowledgeBasisEdgeArgs, 'orderBy'>>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteLocalePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteLocalePayload'] = ResolversParentTypes['DeleteLocalePayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deletedLocaleId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  locale?: Resolver<Maybe<ResolversTypes['Locale']>, ParentType, ContextType>;
  localeEdge?: Resolver<Maybe<ResolversTypes['LocalesEdge']>, ParentType, ContextType, RequireFields<DeleteLocalePayloadLocaleEdgeArgs, 'orderBy'>>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ExportKnowledgeBaseTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExportKnowledgeBaseType'] = ResolversParentTypes['ExportKnowledgeBaseType']> = {
  link?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type KnowledgeBaseArticleResolvers<ContextType = any, ParentType extends ResolversParentTypes['KnowledgeBaseArticle'] = ResolversParentTypes['KnowledgeBaseArticle']> = {
  categoryId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isArchived?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  knowledgeBaseId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  position?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KnowledgeBaseArticleDelayedJobResolvers<ContextType = any, ParentType extends ResolversParentTypes['KnowledgeBaseArticleDelayedJob'] = ResolversParentTypes['KnowledgeBaseArticleDelayedJob']> = {
  createdAt?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  knowledgeBaseArticleId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  knowledgeBaseArticleTranslationId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  knowledgeBaseId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  publishUpdateDelete?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  runAt?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KnowledgeBaseArticleDelayedJobTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['KnowledgeBaseArticleDelayedJobType'] = ResolversParentTypes['KnowledgeBaseArticleDelayedJobType']> = {
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  knowledge_base_article_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  knowledge_base_article_translation_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  knowledge_base_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  publish_update_delete?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  run_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KnowledgeBaseArticleDelayedJobsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['KnowledgeBaseArticleDelayedJobsConnection'] = ResolversParentTypes['KnowledgeBaseArticleDelayedJobsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['KnowledgeBaseArticleDelayedJobsEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['KnowledgeBaseArticleDelayedJob']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KnowledgeBaseArticleDelayedJobsEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['KnowledgeBaseArticleDelayedJobsEdge'] = ResolversParentTypes['KnowledgeBaseArticleDelayedJobsEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['KnowledgeBaseArticleDelayedJob']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KnowledgeBaseArticleTranslationResolvers<ContextType = any, ParentType extends ResolversParentTypes['KnowledgeBaseArticleTranslation'] = ResolversParentTypes['KnowledgeBaseArticleTranslation']> = {
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  articleId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  body?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  categoryId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isArchived?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isDeleteScheduled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isUpdateScheduled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  kbLocaleId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  keywords?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  knowledgeBaseId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  listId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  listName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metaDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  publishNow?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  titleTag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uiColor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updateMetadata?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KnowledgeBaseArticleTranslationsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['KnowledgeBaseArticleTranslationsConnection'] = ResolversParentTypes['KnowledgeBaseArticleTranslationsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['KnowledgeBaseArticleTranslationsEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['KnowledgeBaseArticleTranslation']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KnowledgeBaseArticleTranslationsEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['KnowledgeBaseArticleTranslationsEdge'] = ResolversParentTypes['KnowledgeBaseArticleTranslationsEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['KnowledgeBaseArticleTranslation']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KnowledgeBaseArticleTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['KnowledgeBaseArticleType'] = ResolversParentTypes['KnowledgeBaseArticleType']> = {
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  article_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  body?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  is_archived?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  is_delete_scheduled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  is_update_scheduled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  kb_locale_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  keywords?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  knowledge_base_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  list_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  meta_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  publish_now?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title_tag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ui_color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  update_metadata?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KnowledgeBaseArticlesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['KnowledgeBaseArticlesConnection'] = ResolversParentTypes['KnowledgeBaseArticlesConnection']> = {
  edges?: Resolver<Array<ResolversTypes['KnowledgeBaseArticlesEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['KnowledgeBaseArticle']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KnowledgeBaseArticlesEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['KnowledgeBaseArticlesEdge'] = ResolversParentTypes['KnowledgeBaseArticlesEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['KnowledgeBaseArticle']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KnowledgeBaseCategoriesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['KnowledgeBaseCategoriesConnection'] = ResolversParentTypes['KnowledgeBaseCategoriesConnection']> = {
  edges?: Resolver<Array<ResolversTypes['KnowledgeBaseCategoriesEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['KnowledgeBaseCategory']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KnowledgeBaseCategoriesEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['KnowledgeBaseCategoriesEdge'] = ResolversParentTypes['KnowledgeBaseCategoriesEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['KnowledgeBaseCategory']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KnowledgeBaseCategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['KnowledgeBaseCategory'] = ResolversParentTypes['KnowledgeBaseCategory']> = {
  createdAt?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isArchived?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  knowledgeBaseId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parentId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  position?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KnowledgeBaseCategoryDelayedJobResolvers<ContextType = any, ParentType extends ResolversParentTypes['KnowledgeBaseCategoryDelayedJob'] = ResolversParentTypes['KnowledgeBaseCategoryDelayedJob']> = {
  createdAt?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  knowledgeBaseCategoryTranslationId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  knowledgeBaseId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  publishUpdateDelete?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  runAt?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KnowledgeBaseCategoryDelayedJobsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['KnowledgeBaseCategoryDelayedJobsConnection'] = ResolversParentTypes['KnowledgeBaseCategoryDelayedJobsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['KnowledgeBaseCategoryDelayedJobsEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['KnowledgeBaseCategoryDelayedJob']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KnowledgeBaseCategoryDelayedJobsEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['KnowledgeBaseCategoryDelayedJobsEdge'] = ResolversParentTypes['KnowledgeBaseCategoryDelayedJobsEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['KnowledgeBaseCategoryDelayedJob']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KnowledgeBaseCategoryHybridStatTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['KnowledgeBaseCategoryHybridStatType'] = ResolversParentTypes['KnowledgeBaseCategoryHybridStatType']> = {
  data?: Resolver<Maybe<ResolversTypes['KnowledgeBaseCategoryHybridType']>, ParentType, ContextType>;
  stat?: Resolver<Maybe<ResolversTypes['KnowledgeBaseCategoryStatType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KnowledgeBaseCategoryHybridTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['KnowledgeBaseCategoryHybridType'] = ResolversParentTypes['KnowledgeBaseCategoryHybridType']> = {
  info?: Resolver<Maybe<ResolversTypes['KnowledgeBaseCategoryInfoType']>, ParentType, ContextType>;
  knowledge_base_category?: Resolver<Maybe<ResolversTypes['KnowledgeBaseCategoryType']>, ParentType, ContextType>;
  knowledge_base_category_translation?: Resolver<Maybe<ResolversTypes['KnowledgeBaseCategoryTranslationType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KnowledgeBaseCategoryInfoTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['KnowledgeBaseCategoryInfoType'] = ResolversParentTypes['KnowledgeBaseCategoryInfoType']> = {
  parent_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KnowledgeBaseCategoryLevelTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['KnowledgeBaseCategoryLevelType'] = ResolversParentTypes['KnowledgeBaseCategoryLevelType']> = {
  depth?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  max_level?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KnowledgeBaseCategoryScheduleTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['KnowledgeBaseCategoryScheduleType'] = ResolversParentTypes['KnowledgeBaseCategoryScheduleType']> = {
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  knowledge_base_category_translation_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  knowledge_base_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  publish_update_delete?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  run_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KnowledgeBaseCategoryStatTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['KnowledgeBaseCategoryStatType'] = ResolversParentTypes['KnowledgeBaseCategoryStatType']> = {
  level?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  num_articles?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  num_categories?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KnowledgeBaseCategoryTranslationResolvers<ContextType = any, ParentType extends ResolversParentTypes['KnowledgeBaseCategoryTranslation'] = ResolversParentTypes['KnowledgeBaseCategoryTranslation']> = {
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  categoryIcon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  categoryId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  footer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isArchived?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isDeleteScheduled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isUpdateScheduled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  kbLocaleId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  keywords?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  knowledgeBaseId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  listId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  metaDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  permission?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishNow?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  titleTag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uiColor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updateMetadata?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KnowledgeBaseCategoryTranslationTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['KnowledgeBaseCategoryTranslationType'] = ResolversParentTypes['KnowledgeBaseCategoryTranslationType']> = {
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  category_icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  footer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  is_archived?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  is_delete_scheduled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  is_update_scheduled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  kb_locale_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  keywords?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  knowledge_base_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  list_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  meta_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  permission?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publish_now?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  title_tag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ui_color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  update_metadata?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KnowledgeBaseCategoryTranslationsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['KnowledgeBaseCategoryTranslationsConnection'] = ResolversParentTypes['KnowledgeBaseCategoryTranslationsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['KnowledgeBaseCategoryTranslationsEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['KnowledgeBaseCategoryTranslation']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KnowledgeBaseCategoryTranslationsEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['KnowledgeBaseCategoryTranslationsEdge'] = ResolversParentTypes['KnowledgeBaseCategoryTranslationsEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['KnowledgeBaseCategoryTranslation']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KnowledgeBaseCategoryTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['KnowledgeBaseCategoryType'] = ResolversParentTypes['KnowledgeBaseCategoryType']> = {
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  is_archived?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  knowledge_base_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  parent_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KnowledgeBaseLevelStatusDataTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['KnowledgeBaseLevelStatusDataType'] = ResolversParentTypes['KnowledgeBaseLevelStatusDataType']> = {
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  tooltip?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KnowledgeBaseLevelStatusHybridTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['KnowledgeBaseLevelStatusHybridType'] = ResolversParentTypes['KnowledgeBaseLevelStatusHybridType']> = {
  articles?: Resolver<Maybe<ResolversTypes['KnowledgeBaseLevelStatusType']>, ParentType, ContextType>;
  categories?: Resolver<Maybe<ResolversTypes['KnowledgeBaseLevelStatusType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KnowledgeBaseLevelStatusTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['KnowledgeBaseLevelStatusType'] = ResolversParentTypes['KnowledgeBaseLevelStatusType']> = {
  archived?: Resolver<Maybe<ResolversTypes['KnowledgeBaseLevelStatusDataType']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  draft?: Resolver<Maybe<ResolversTypes['KnowledgeBaseLevelStatusDataType']>, ParentType, ContextType>;
  no_action?: Resolver<Maybe<ResolversTypes['KnowledgeBaseLevelStatusDataType']>, ParentType, ContextType>;
  published?: Resolver<Maybe<ResolversTypes['KnowledgeBaseLevelStatusDataType']>, ParentType, ContextType>;
  scheduled_to_archive?: Resolver<Maybe<ResolversTypes['KnowledgeBaseLevelStatusDataType']>, ParentType, ContextType>;
  scheduled_to_publish?: Resolver<Maybe<ResolversTypes['KnowledgeBaseLevelStatusDataType']>, ParentType, ContextType>;
  scheduled_to_update?: Resolver<Maybe<ResolversTypes['KnowledgeBaseLevelStatusDataType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KnowledgeBaseListResolvers<ContextType = any, ParentType extends ResolversParentTypes['KnowledgeBaseList'] = ResolversParentTypes['KnowledgeBaseList']> = {
  createdAt?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  knowledgeBaseId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  listType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  position?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KnowledgeBaseListTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['KnowledgeBaseListType'] = ResolversParentTypes['KnowledgeBaseListType']> = {
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  knowledge_base_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  list_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KnowledgeBaseListsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['KnowledgeBaseListsConnection'] = ResolversParentTypes['KnowledgeBaseListsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['KnowledgeBaseListsEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['KnowledgeBaseList']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KnowledgeBaseListsEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['KnowledgeBaseListsEdge'] = ResolversParentTypes['KnowledgeBaseListsEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['KnowledgeBaseList']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KnowledgeBaseTranslationResolvers<ContextType = any, ParentType extends ResolversParentTypes['KnowledgeBaseTranslation'] = ResolversParentTypes['KnowledgeBaseTranslation']> = {
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  footerNote?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isArchived?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  kbLocaleId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  knowledgeBaseId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uiColor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KnowledgeBaseTranslationsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['KnowledgeBaseTranslationsConnection'] = ResolversParentTypes['KnowledgeBaseTranslationsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['KnowledgeBaseTranslationsEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['KnowledgeBaseTranslation']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KnowledgeBaseTranslationsEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['KnowledgeBaseTranslationsEdge'] = ResolversParentTypes['KnowledgeBaseTranslationsEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['KnowledgeBaseTranslation']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KnowledgeBasesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['KnowledgeBasesConnection'] = ResolversParentTypes['KnowledgeBasesConnection']> = {
  edges?: Resolver<Array<ResolversTypes['KnowledgeBasesEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['KnowledgeBasis']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KnowledgeBasesEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['KnowledgeBasesEdge'] = ResolversParentTypes['KnowledgeBasesEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['KnowledgeBasis']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KnowledgeBasisResolvers<ContextType = any, ParentType extends ResolversParentTypes['KnowledgeBasis'] = ResolversParentTypes['KnowledgeBasis']> = {
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  categoryLayout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>;
  footer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  frontPage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  homepageLayout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isArchived?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  position?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  uiColor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KnowledgebaseResolvers<ContextType = any, ParentType extends ResolversParentTypes['Knowledgebase'] = ResolversParentTypes['Knowledgebase']> = {
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  category_layout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  footer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  front_page?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  homepage_layout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  is_archived?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  tooltip?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ui_color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KnowledgebaseTranslationStatusColorResolvers<ContextType = any, ParentType extends ResolversParentTypes['KnowledgebaseTranslationStatusColor'] = ResolversParentTypes['KnowledgebaseTranslationStatusColor']> = {
  default?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  kb_locale_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  knowledge_base_translation_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tooltip?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ui_color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KnowledgebaseTranslationTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['KnowledgebaseTranslationType'] = ResolversParentTypes['KnowledgebaseTranslationType']> = {
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  footer_note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  is_archived?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  kb_locale_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  knowledge_base_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tooltip?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ui_color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LocaleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Locale'] = ResolversParentTypes['Locale']> = {
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  alias?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  dir?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  locale?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LocalesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['LocalesConnection'] = ResolversParentTypes['LocalesConnection']> = {
  edges?: Resolver<Array<ResolversTypes['LocalesEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Locale']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LocalesEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LocalesEdge'] = ResolversParentTypes['LocalesEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Locale']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  archiveKnowledgeBaseArticle_?: Resolver<Maybe<ResolversTypes['Response']>, ParentType, ContextType, RequireFields<MutationArchiveKnowledgeBaseArticle_Args, 'category_id'>>;
  archiveKnowledgeBaseCategory_?: Resolver<Maybe<ResolversTypes['Response']>, ParentType, ContextType, RequireFields<MutationArchiveKnowledgeBaseCategory_Args, 'category_id'>>;
  createActivityStream?: Resolver<Maybe<ResolversTypes['CreateActivityStreamPayload']>, ParentType, ContextType, RequireFields<MutationCreateActivityStreamArgs, 'input'>>;
  createKnowledgeBaseArticle?: Resolver<Maybe<ResolversTypes['CreateKnowledgeBaseArticlePayload']>, ParentType, ContextType, RequireFields<MutationCreateKnowledgeBaseArticleArgs, 'input'>>;
  createKnowledgeBaseArticleDelayedJob?: Resolver<Maybe<ResolversTypes['CreateKnowledgeBaseArticleDelayedJobPayload']>, ParentType, ContextType, RequireFields<MutationCreateKnowledgeBaseArticleDelayedJobArgs, 'input'>>;
  createKnowledgeBaseArticleTranslation?: Resolver<Maybe<ResolversTypes['CreateKnowledgeBaseArticleTranslationPayload']>, ParentType, ContextType, RequireFields<MutationCreateKnowledgeBaseArticleTranslationArgs, 'input'>>;
  createKnowledgeBaseArticle_?: Resolver<Maybe<ResolversTypes['Response']>, ParentType, ContextType, RequireFields<MutationCreateKnowledgeBaseArticle_Args, 'active' | 'category_id' | 'kb_locale_id' | 'knowledge_base_id' | 'publish_now' | 'title'>>;
  createKnowledgeBaseCategory?: Resolver<Maybe<ResolversTypes['CreateKnowledgeBaseCategoryPayload']>, ParentType, ContextType, RequireFields<MutationCreateKnowledgeBaseCategoryArgs, 'input'>>;
  createKnowledgeBaseCategoryDelayedJob?: Resolver<Maybe<ResolversTypes['CreateKnowledgeBaseCategoryDelayedJobPayload']>, ParentType, ContextType, RequireFields<MutationCreateKnowledgeBaseCategoryDelayedJobArgs, 'input'>>;
  createKnowledgeBaseCategoryTranslation?: Resolver<Maybe<ResolversTypes['CreateKnowledgeBaseCategoryTranslationPayload']>, ParentType, ContextType, RequireFields<MutationCreateKnowledgeBaseCategoryTranslationArgs, 'input'>>;
  createKnowledgeBaseCategory_?: Resolver<Maybe<ResolversTypes['Response']>, ParentType, ContextType, RequireFields<MutationCreateKnowledgeBaseCategory_Args, 'active' | 'category_id' | 'kb_locale_id' | 'knowledge_base_id' | 'name' | 'parent_id' | 'publish_now'>>;
  createKnowledgeBaseList?: Resolver<Maybe<ResolversTypes['CreateKnowledgeBaseListPayload']>, ParentType, ContextType, RequireFields<MutationCreateKnowledgeBaseListArgs, 'input'>>;
  createKnowledgeBaseTranslation?: Resolver<Maybe<ResolversTypes['CreateKnowledgeBaseTranslationPayload']>, ParentType, ContextType, RequireFields<MutationCreateKnowledgeBaseTranslationArgs, 'input'>>;
  createKnowledgeBasis?: Resolver<Maybe<ResolversTypes['CreateKnowledgeBasisPayload']>, ParentType, ContextType, RequireFields<MutationCreateKnowledgeBasisArgs, 'input'>>;
  createKnowledgebase_?: Resolver<Maybe<ResolversTypes['Response']>, ParentType, ContextType, RequireFields<MutationCreateKnowledgebase_Args, 'active' | 'category_layout' | 'footer' | 'front_page' | 'homepage_layout' | 'icon' | 'kb_locale_ids' | 'name'>>;
  createLocale?: Resolver<Maybe<ResolversTypes['CreateLocalePayload']>, ParentType, ContextType, RequireFields<MutationCreateLocaleArgs, 'input'>>;
  createUser?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'userInput'>>;
  createUsersWithArrayInput?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationCreateUsersWithArrayInputArgs, 'userCreateWithArrayInput'>>;
  createUsersWithListInput?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationCreateUsersWithListInputArgs, 'userCreateWithListInput'>>;
  deleteActivityStream?: Resolver<Maybe<ResolversTypes['DeleteActivityStreamPayload']>, ParentType, ContextType, RequireFields<MutationDeleteActivityStreamArgs, 'input'>>;
  deleteActivityStreamById?: Resolver<Maybe<ResolversTypes['DeleteActivityStreamPayload']>, ParentType, ContextType, RequireFields<MutationDeleteActivityStreamByIdArgs, 'input'>>;
  deleteKnowledgeBaseArticle?: Resolver<Maybe<ResolversTypes['DeleteKnowledgeBaseArticlePayload']>, ParentType, ContextType, RequireFields<MutationDeleteKnowledgeBaseArticleArgs, 'input'>>;
  deleteKnowledgeBaseArticleById?: Resolver<Maybe<ResolversTypes['DeleteKnowledgeBaseArticlePayload']>, ParentType, ContextType, RequireFields<MutationDeleteKnowledgeBaseArticleByIdArgs, 'input'>>;
  deleteKnowledgeBaseArticleDelayedJob?: Resolver<Maybe<ResolversTypes['DeleteKnowledgeBaseArticleDelayedJobPayload']>, ParentType, ContextType, RequireFields<MutationDeleteKnowledgeBaseArticleDelayedJobArgs, 'input'>>;
  deleteKnowledgeBaseArticleDelayedJobById?: Resolver<Maybe<ResolversTypes['DeleteKnowledgeBaseArticleDelayedJobPayload']>, ParentType, ContextType, RequireFields<MutationDeleteKnowledgeBaseArticleDelayedJobByIdArgs, 'input'>>;
  deleteKnowledgeBaseArticleTranslation?: Resolver<Maybe<ResolversTypes['DeleteKnowledgeBaseArticleTranslationPayload']>, ParentType, ContextType, RequireFields<MutationDeleteKnowledgeBaseArticleTranslationArgs, 'input'>>;
  deleteKnowledgeBaseArticleTranslationById?: Resolver<Maybe<ResolversTypes['DeleteKnowledgeBaseArticleTranslationPayload']>, ParentType, ContextType, RequireFields<MutationDeleteKnowledgeBaseArticleTranslationByIdArgs, 'input'>>;
  deleteKnowledgeBaseCategory?: Resolver<Maybe<ResolversTypes['DeleteKnowledgeBaseCategoryPayload']>, ParentType, ContextType, RequireFields<MutationDeleteKnowledgeBaseCategoryArgs, 'input'>>;
  deleteKnowledgeBaseCategoryById?: Resolver<Maybe<ResolversTypes['DeleteKnowledgeBaseCategoryPayload']>, ParentType, ContextType, RequireFields<MutationDeleteKnowledgeBaseCategoryByIdArgs, 'input'>>;
  deleteKnowledgeBaseCategoryDelayedJob?: Resolver<Maybe<ResolversTypes['DeleteKnowledgeBaseCategoryDelayedJobPayload']>, ParentType, ContextType, RequireFields<MutationDeleteKnowledgeBaseCategoryDelayedJobArgs, 'input'>>;
  deleteKnowledgeBaseCategoryDelayedJobById?: Resolver<Maybe<ResolversTypes['DeleteKnowledgeBaseCategoryDelayedJobPayload']>, ParentType, ContextType, RequireFields<MutationDeleteKnowledgeBaseCategoryDelayedJobByIdArgs, 'input'>>;
  deleteKnowledgeBaseCategoryTranslation?: Resolver<Maybe<ResolversTypes['DeleteKnowledgeBaseCategoryTranslationPayload']>, ParentType, ContextType, RequireFields<MutationDeleteKnowledgeBaseCategoryTranslationArgs, 'input'>>;
  deleteKnowledgeBaseCategoryTranslationById?: Resolver<Maybe<ResolversTypes['DeleteKnowledgeBaseCategoryTranslationPayload']>, ParentType, ContextType, RequireFields<MutationDeleteKnowledgeBaseCategoryTranslationByIdArgs, 'input'>>;
  deleteKnowledgeBaseList?: Resolver<Maybe<ResolversTypes['DeleteKnowledgeBaseListPayload']>, ParentType, ContextType, RequireFields<MutationDeleteKnowledgeBaseListArgs, 'input'>>;
  deleteKnowledgeBaseListById?: Resolver<Maybe<ResolversTypes['DeleteKnowledgeBaseListPayload']>, ParentType, ContextType, RequireFields<MutationDeleteKnowledgeBaseListByIdArgs, 'input'>>;
  deleteKnowledgeBaseTranslation?: Resolver<Maybe<ResolversTypes['DeleteKnowledgeBaseTranslationPayload']>, ParentType, ContextType, RequireFields<MutationDeleteKnowledgeBaseTranslationArgs, 'input'>>;
  deleteKnowledgeBaseTranslationById?: Resolver<Maybe<ResolversTypes['DeleteKnowledgeBaseTranslationPayload']>, ParentType, ContextType, RequireFields<MutationDeleteKnowledgeBaseTranslationByIdArgs, 'input'>>;
  deleteKnowledgeBasis?: Resolver<Maybe<ResolversTypes['DeleteKnowledgeBasisPayload']>, ParentType, ContextType, RequireFields<MutationDeleteKnowledgeBasisArgs, 'input'>>;
  deleteKnowledgeBasisById?: Resolver<Maybe<ResolversTypes['DeleteKnowledgeBasisPayload']>, ParentType, ContextType, RequireFields<MutationDeleteKnowledgeBasisByIdArgs, 'input'>>;
  deleteLocale?: Resolver<Maybe<ResolversTypes['DeleteLocalePayload']>, ParentType, ContextType, RequireFields<MutationDeleteLocaleArgs, 'input'>>;
  deleteLocaleById?: Resolver<Maybe<ResolversTypes['DeleteLocalePayload']>, ParentType, ContextType, RequireFields<MutationDeleteLocaleByIdArgs, 'input'>>;
  importKnowledgebase_?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<MutationImportKnowledgebase_Args>>;
  placeOrder?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<MutationPlaceOrderArgs, 'orderInput'>>;
  rearrangeKnowledgebaseArticlePositions_?: Resolver<Maybe<ResolversTypes['Response']>, ParentType, ContextType, RequireFields<MutationRearrangeKnowledgebaseArticlePositions_Args, 'article_ids'>>;
  rearrangeKnowledgebaseCategoryPositions_?: Resolver<Maybe<ResolversTypes['Response']>, ParentType, ContextType, RequireFields<MutationRearrangeKnowledgebaseCategoryPositions_Args, 'category_ids'>>;
  rearrangeKnowledgebasePositions_?: Resolver<Maybe<ResolversTypes['Response']>, ParentType, ContextType, RequireFields<MutationRearrangeKnowledgebasePositions_Args, 'knowledge_base_ids'>>;
  removeScheduleForKnowledgeBaseArticle_?: Resolver<Maybe<ResolversTypes['Response']>, ParentType, ContextType, RequireFields<MutationRemoveScheduleForKnowledgeBaseArticle_Args, 'knowledge_base_article_translation_id' | 'schedule_type'>>;
  removeScheduleForKnowledgebaseCategory_?: Resolver<Maybe<ResolversTypes['Response']>, ParentType, ContextType, RequireFields<MutationRemoveScheduleForKnowledgebaseCategory_Args, 'knowledge_base_category_translation_id' | 'schedule_type'>>;
  scheduleKnowledgeBaseArticleUpdate_?: Resolver<Maybe<ResolversTypes['Response']>, ParentType, ContextType, RequireFields<MutationScheduleKnowledgeBaseArticleUpdate_Args, 'article_id' | 'knowledge_base_article_translation_id' | 'knowledge_base_id' | 'update_metadata'>>;
  scheduleKnowledgeBaseCategoryUpdate_?: Resolver<Maybe<ResolversTypes['Response']>, ParentType, ContextType, RequireFields<MutationScheduleKnowledgeBaseCategoryUpdate_Args, 'knowledge_base_category_translation_id' | 'knowledge_base_id' | 'update_metadata'>>;
  scheduleKnowledgebaseArticleDelete_?: Resolver<Maybe<ResolversTypes['Response']>, ParentType, ContextType, RequireFields<MutationScheduleKnowledgebaseArticleDelete_Args, 'article_id' | 'knowledge_base_article_translation_id' | 'knowledge_base_id' | 'run_at'>>;
  scheduleKnowledgebaseCategoryDelete_?: Resolver<Maybe<ResolversTypes['Response']>, ParentType, ContextType, RequireFields<MutationScheduleKnowledgebaseCategoryDelete_Args, 'knowledge_base_category_translation_id' | 'knowledge_base_id' | 'run_at'>>;
  unarchiveKnowledgeBaseArticle_?: Resolver<Maybe<ResolversTypes['Response']>, ParentType, ContextType, RequireFields<MutationUnarchiveKnowledgeBaseArticle_Args, 'category_id'>>;
  unarchiveKnowledgeBaseCategory_?: Resolver<Maybe<ResolversTypes['Response']>, ParentType, ContextType, RequireFields<MutationUnarchiveKnowledgeBaseCategory_Args, 'category_id'>>;
  updateActivityStream?: Resolver<Maybe<ResolversTypes['UpdateActivityStreamPayload']>, ParentType, ContextType, RequireFields<MutationUpdateActivityStreamArgs, 'input'>>;
  updateActivityStreamById?: Resolver<Maybe<ResolversTypes['UpdateActivityStreamPayload']>, ParentType, ContextType, RequireFields<MutationUpdateActivityStreamByIdArgs, 'input'>>;
  updateKnowledgeBaseArticle?: Resolver<Maybe<ResolversTypes['UpdateKnowledgeBaseArticlePayload']>, ParentType, ContextType, RequireFields<MutationUpdateKnowledgeBaseArticleArgs, 'input'>>;
  updateKnowledgeBaseArticleById?: Resolver<Maybe<ResolversTypes['UpdateKnowledgeBaseArticlePayload']>, ParentType, ContextType, RequireFields<MutationUpdateKnowledgeBaseArticleByIdArgs, 'input'>>;
  updateKnowledgeBaseArticleDelayedJob?: Resolver<Maybe<ResolversTypes['UpdateKnowledgeBaseArticleDelayedJobPayload']>, ParentType, ContextType, RequireFields<MutationUpdateKnowledgeBaseArticleDelayedJobArgs, 'input'>>;
  updateKnowledgeBaseArticleDelayedJobById?: Resolver<Maybe<ResolversTypes['UpdateKnowledgeBaseArticleDelayedJobPayload']>, ParentType, ContextType, RequireFields<MutationUpdateKnowledgeBaseArticleDelayedJobByIdArgs, 'input'>>;
  updateKnowledgeBaseArticleTranslation?: Resolver<Maybe<ResolversTypes['UpdateKnowledgeBaseArticleTranslationPayload']>, ParentType, ContextType, RequireFields<MutationUpdateKnowledgeBaseArticleTranslationArgs, 'input'>>;
  updateKnowledgeBaseArticleTranslationById?: Resolver<Maybe<ResolversTypes['UpdateKnowledgeBaseArticleTranslationPayload']>, ParentType, ContextType, RequireFields<MutationUpdateKnowledgeBaseArticleTranslationByIdArgs, 'input'>>;
  updateKnowledgeBaseArticle_?: Resolver<Maybe<ResolversTypes['Response']>, ParentType, ContextType, RequireFields<MutationUpdateKnowledgeBaseArticle_Args, 'active' | 'article_id' | 'category_id' | 'kb_locale_id' | 'knowledge_base_id' | 'publish_now' | 'title'>>;
  updateKnowledgeBaseCategory?: Resolver<Maybe<ResolversTypes['UpdateKnowledgeBaseCategoryPayload']>, ParentType, ContextType, RequireFields<MutationUpdateKnowledgeBaseCategoryArgs, 'input'>>;
  updateKnowledgeBaseCategoryById?: Resolver<Maybe<ResolversTypes['UpdateKnowledgeBaseCategoryPayload']>, ParentType, ContextType, RequireFields<MutationUpdateKnowledgeBaseCategoryByIdArgs, 'input'>>;
  updateKnowledgeBaseCategoryDelayedJob?: Resolver<Maybe<ResolversTypes['UpdateKnowledgeBaseCategoryDelayedJobPayload']>, ParentType, ContextType, RequireFields<MutationUpdateKnowledgeBaseCategoryDelayedJobArgs, 'input'>>;
  updateKnowledgeBaseCategoryDelayedJobById?: Resolver<Maybe<ResolversTypes['UpdateKnowledgeBaseCategoryDelayedJobPayload']>, ParentType, ContextType, RequireFields<MutationUpdateKnowledgeBaseCategoryDelayedJobByIdArgs, 'input'>>;
  updateKnowledgeBaseCategoryTranslation?: Resolver<Maybe<ResolversTypes['UpdateKnowledgeBaseCategoryTranslationPayload']>, ParentType, ContextType, RequireFields<MutationUpdateKnowledgeBaseCategoryTranslationArgs, 'input'>>;
  updateKnowledgeBaseCategoryTranslationById?: Resolver<Maybe<ResolversTypes['UpdateKnowledgeBaseCategoryTranslationPayload']>, ParentType, ContextType, RequireFields<MutationUpdateKnowledgeBaseCategoryTranslationByIdArgs, 'input'>>;
  updateKnowledgeBaseCategory_?: Resolver<Maybe<ResolversTypes['Response']>, ParentType, ContextType, RequireFields<MutationUpdateKnowledgeBaseCategory_Args, 'active' | 'category_id' | 'kb_locale_id' | 'knowledge_base_id' | 'name' | 'parent_id' | 'publish_now'>>;
  updateKnowledgeBaseList?: Resolver<Maybe<ResolversTypes['UpdateKnowledgeBaseListPayload']>, ParentType, ContextType, RequireFields<MutationUpdateKnowledgeBaseListArgs, 'input'>>;
  updateKnowledgeBaseListById?: Resolver<Maybe<ResolversTypes['UpdateKnowledgeBaseListPayload']>, ParentType, ContextType, RequireFields<MutationUpdateKnowledgeBaseListByIdArgs, 'input'>>;
  updateKnowledgeBaseTranslation?: Resolver<Maybe<ResolversTypes['UpdateKnowledgeBaseTranslationPayload']>, ParentType, ContextType, RequireFields<MutationUpdateKnowledgeBaseTranslationArgs, 'input'>>;
  updateKnowledgeBaseTranslationById?: Resolver<Maybe<ResolversTypes['UpdateKnowledgeBaseTranslationPayload']>, ParentType, ContextType, RequireFields<MutationUpdateKnowledgeBaseTranslationByIdArgs, 'input'>>;
  updateKnowledgeBasis?: Resolver<Maybe<ResolversTypes['UpdateKnowledgeBasisPayload']>, ParentType, ContextType, RequireFields<MutationUpdateKnowledgeBasisArgs, 'input'>>;
  updateKnowledgeBasisById?: Resolver<Maybe<ResolversTypes['UpdateKnowledgeBasisPayload']>, ParentType, ContextType, RequireFields<MutationUpdateKnowledgeBasisByIdArgs, 'input'>>;
  updateKnowledgebase_?: Resolver<Maybe<ResolversTypes['Response']>, ParentType, ContextType, RequireFields<MutationUpdateKnowledgebase_Args, 'active' | 'category_layout' | 'footer' | 'front_page' | 'homepage_layout' | 'icon' | 'kb_locale_ids' | 'knowledge_base_id' | 'name'>>;
  updateLocale?: Resolver<Maybe<ResolversTypes['UpdateLocalePayload']>, ParentType, ContextType, RequireFields<MutationUpdateLocaleArgs, 'input'>>;
  updateLocaleById?: Resolver<Maybe<ResolversTypes['UpdateLocalePayload']>, ParentType, ContextType, RequireFields<MutationUpdateLocaleByIdArgs, 'input'>>;
  uploadFile?: Resolver<Maybe<ResolversTypes['ApiResponse']>, ParentType, ContextType, RequireFields<MutationUploadFileArgs, 'petId'>>;
};

export type NodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = {
  __resolveType: TypeResolveFn<'ActivityStream' | 'KnowledgeBaseArticle' | 'KnowledgeBaseArticleDelayedJob' | 'KnowledgeBaseArticleTranslation' | 'KnowledgeBaseCategory' | 'KnowledgeBaseCategoryDelayedJob' | 'KnowledgeBaseCategoryTranslation' | 'KnowledgeBaseList' | 'KnowledgeBaseTranslation' | 'KnowledgeBasis' | 'Locale' | 'Query', ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type OrderResolvers<ContextType = any, ParentType extends ResolversParentTypes['Order'] = ResolversParentTypes['Order']> = {
  complete?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  petId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  shipDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Status3']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PetResolvers<ContextType = any, ParentType extends ResolversParentTypes['Pet'] = ResolversParentTypes['Pet']> = {
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  photoUrls?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Status']>, ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<Maybe<ResolversTypes['Tag']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  activityStream?: Resolver<Maybe<ResolversTypes['ActivityStream']>, ParentType, ContextType, RequireFields<QueryActivityStreamArgs, 'nodeId'>>;
  activityStreamById?: Resolver<Maybe<ResolversTypes['ActivityStream']>, ParentType, ContextType, RequireFields<QueryActivityStreamByIdArgs, 'id'>>;
  allActivityStreams?: Resolver<Maybe<ResolversTypes['ActivityStreamsConnection']>, ParentType, ContextType, RequireFields<QueryAllActivityStreamsArgs, 'orderBy'>>;
  allKnowledgeBaseArticleDelayedJobs?: Resolver<Maybe<ResolversTypes['KnowledgeBaseArticleDelayedJobsConnection']>, ParentType, ContextType, RequireFields<QueryAllKnowledgeBaseArticleDelayedJobsArgs, 'orderBy'>>;
  allKnowledgeBaseArticleTranslations?: Resolver<Maybe<ResolversTypes['KnowledgeBaseArticleTranslationsConnection']>, ParentType, ContextType, RequireFields<QueryAllKnowledgeBaseArticleTranslationsArgs, 'orderBy'>>;
  allKnowledgeBaseArticles?: Resolver<Maybe<ResolversTypes['KnowledgeBaseArticlesConnection']>, ParentType, ContextType, RequireFields<QueryAllKnowledgeBaseArticlesArgs, 'orderBy'>>;
  allKnowledgeBaseCategories?: Resolver<Maybe<ResolversTypes['KnowledgeBaseCategoriesConnection']>, ParentType, ContextType, RequireFields<QueryAllKnowledgeBaseCategoriesArgs, 'orderBy'>>;
  allKnowledgeBaseCategoryDelayedJobs?: Resolver<Maybe<ResolversTypes['KnowledgeBaseCategoryDelayedJobsConnection']>, ParentType, ContextType, RequireFields<QueryAllKnowledgeBaseCategoryDelayedJobsArgs, 'orderBy'>>;
  allKnowledgeBaseCategoryTranslations?: Resolver<Maybe<ResolversTypes['KnowledgeBaseCategoryTranslationsConnection']>, ParentType, ContextType, RequireFields<QueryAllKnowledgeBaseCategoryTranslationsArgs, 'orderBy'>>;
  allKnowledgeBaseLists?: Resolver<Maybe<ResolversTypes['KnowledgeBaseListsConnection']>, ParentType, ContextType, RequireFields<QueryAllKnowledgeBaseListsArgs, 'orderBy'>>;
  allKnowledgeBaseTranslations?: Resolver<Maybe<ResolversTypes['KnowledgeBaseTranslationsConnection']>, ParentType, ContextType, RequireFields<QueryAllKnowledgeBaseTranslationsArgs, 'orderBy'>>;
  allKnowledgeBases?: Resolver<Maybe<ResolversTypes['KnowledgeBasesConnection']>, ParentType, ContextType, RequireFields<QueryAllKnowledgeBasesArgs, 'orderBy'>>;
  allLocales?: Resolver<Maybe<ResolversTypes['LocalesConnection']>, ParentType, ContextType, RequireFields<QueryAllLocalesArgs, 'orderBy'>>;
  exportKnowledgebase_?: Resolver<Maybe<ResolversTypes['ExportKnowledgeBaseType']>, ParentType, ContextType, RequireFields<QueryExportKnowledgebase_Args, 'knowledge_base_id'>>;
  getKnowledgeBaseArticleTranslation_?: Resolver<Maybe<ResolversTypes['KnowledgeBaseArticleType']>, ParentType, ContextType, RequireFields<QueryGetKnowledgeBaseArticleTranslation_Args, 'article_id' | 'kb_locale_id'>>;
  getKnowledgeBaseArticles_?: Resolver<Maybe<Array<Maybe<ResolversTypes['KnowledgeBaseArticleType']>>>, ParentType, ContextType, RequireFields<QueryGetKnowledgeBaseArticles_Args, 'category_id' | 'kb_locale_id' | 'knowledge_base_id'>>;
  getKnowledgeBaseCategoryLevel_?: Resolver<Maybe<ResolversTypes['KnowledgeBaseCategoryLevelType']>, ParentType, ContextType, RequireFields<QueryGetKnowledgeBaseCategoryLevel_Args, 'category_id' | 'kb_locale_id' | 'knowledge_base_id'>>;
  getKnowledgeBaseCategoryTranslation_?: Resolver<Maybe<ResolversTypes['KnowledgeBaseCategoryHybridStatType']>, ParentType, ContextType, RequireFields<QueryGetKnowledgeBaseCategoryTranslation_Args, 'category_id' | 'kb_locale_id'>>;
  getKnowledgeBaseCategory_?: Resolver<Maybe<ResolversTypes['KnowledgeBaseCategoryType']>, ParentType, ContextType, RequireFields<QueryGetKnowledgeBaseCategory_Args, 'category_id'>>;
  getKnowledgeBaseList_?: Resolver<Maybe<Array<Maybe<ResolversTypes['KnowledgeBaseListType']>>>, ParentType, ContextType, RequireFields<QueryGetKnowledgeBaseList_Args, 'knowledge_base_id' | 'list_type'>>;
  getKnowledgebaseCategories_?: Resolver<Maybe<Array<Maybe<ResolversTypes['KnowledgeBaseCategoryHybridStatType']>>>, ParentType, ContextType, RequireFields<QueryGetKnowledgebaseCategories_Args, 'kb_locale_id' | 'knowledge_base_id'>>;
  getLevelStatus_?: Resolver<Maybe<ResolversTypes['KnowledgeBaseLevelStatusHybridType']>, ParentType, ContextType, RequireFields<QueryGetLevelStatus_Args, 'kb_locale_id' | 'knowledge_base_id' | 'level'>>;
  getScheduleForKnowledgeBaseArticle_?: Resolver<Maybe<ResolversTypes['KnowledgeBaseArticleDelayedJobType']>, ParentType, ContextType, RequireFields<QueryGetScheduleForKnowledgeBaseArticle_Args, 'knowledge_base_article_translation_id' | 'schedule_type'>>;
  getScheduleForKnowledgebaseCategoryTranslation_?: Resolver<Maybe<ResolversTypes['StatusMessageForKnowledgeBaseCategoryScheduleType']>, ParentType, ContextType, RequireFields<QueryGetScheduleForKnowledgebaseCategoryTranslation_Args, 'knowledge_base_category_translation_id' | 'operation'>>;
  knowledgeBaseArticle?: Resolver<Maybe<ResolversTypes['KnowledgeBaseArticle']>, ParentType, ContextType, RequireFields<QueryKnowledgeBaseArticleArgs, 'nodeId'>>;
  knowledgeBaseArticleById?: Resolver<Maybe<ResolversTypes['KnowledgeBaseArticle']>, ParentType, ContextType, RequireFields<QueryKnowledgeBaseArticleByIdArgs, 'id'>>;
  knowledgeBaseArticleDelayedJob?: Resolver<Maybe<ResolversTypes['KnowledgeBaseArticleDelayedJob']>, ParentType, ContextType, RequireFields<QueryKnowledgeBaseArticleDelayedJobArgs, 'nodeId'>>;
  knowledgeBaseArticleDelayedJobById?: Resolver<Maybe<ResolversTypes['KnowledgeBaseArticleDelayedJob']>, ParentType, ContextType, RequireFields<QueryKnowledgeBaseArticleDelayedJobByIdArgs, 'id'>>;
  knowledgeBaseArticleTranslation?: Resolver<Maybe<ResolversTypes['KnowledgeBaseArticleTranslation']>, ParentType, ContextType, RequireFields<QueryKnowledgeBaseArticleTranslationArgs, 'nodeId'>>;
  knowledgeBaseArticleTranslationById?: Resolver<Maybe<ResolversTypes['KnowledgeBaseArticleTranslation']>, ParentType, ContextType, RequireFields<QueryKnowledgeBaseArticleTranslationByIdArgs, 'id'>>;
  knowledgeBaseCategory?: Resolver<Maybe<ResolversTypes['KnowledgeBaseCategory']>, ParentType, ContextType, RequireFields<QueryKnowledgeBaseCategoryArgs, 'nodeId'>>;
  knowledgeBaseCategoryById?: Resolver<Maybe<ResolversTypes['KnowledgeBaseCategory']>, ParentType, ContextType, RequireFields<QueryKnowledgeBaseCategoryByIdArgs, 'id'>>;
  knowledgeBaseCategoryDelayedJob?: Resolver<Maybe<ResolversTypes['KnowledgeBaseCategoryDelayedJob']>, ParentType, ContextType, RequireFields<QueryKnowledgeBaseCategoryDelayedJobArgs, 'nodeId'>>;
  knowledgeBaseCategoryDelayedJobById?: Resolver<Maybe<ResolversTypes['KnowledgeBaseCategoryDelayedJob']>, ParentType, ContextType, RequireFields<QueryKnowledgeBaseCategoryDelayedJobByIdArgs, 'id'>>;
  knowledgeBaseCategoryTranslation?: Resolver<Maybe<ResolversTypes['KnowledgeBaseCategoryTranslation']>, ParentType, ContextType, RequireFields<QueryKnowledgeBaseCategoryTranslationArgs, 'nodeId'>>;
  knowledgeBaseCategoryTranslationById?: Resolver<Maybe<ResolversTypes['KnowledgeBaseCategoryTranslation']>, ParentType, ContextType, RequireFields<QueryKnowledgeBaseCategoryTranslationByIdArgs, 'id'>>;
  knowledgeBaseList?: Resolver<Maybe<ResolversTypes['KnowledgeBaseList']>, ParentType, ContextType, RequireFields<QueryKnowledgeBaseListArgs, 'nodeId'>>;
  knowledgeBaseListById?: Resolver<Maybe<ResolversTypes['KnowledgeBaseList']>, ParentType, ContextType, RequireFields<QueryKnowledgeBaseListByIdArgs, 'id'>>;
  knowledgeBaseTranslation?: Resolver<Maybe<ResolversTypes['KnowledgeBaseTranslation']>, ParentType, ContextType, RequireFields<QueryKnowledgeBaseTranslationArgs, 'nodeId'>>;
  knowledgeBaseTranslationById?: Resolver<Maybe<ResolversTypes['KnowledgeBaseTranslation']>, ParentType, ContextType, RequireFields<QueryKnowledgeBaseTranslationByIdArgs, 'id'>>;
  knowledgeBasis?: Resolver<Maybe<ResolversTypes['KnowledgeBasis']>, ParentType, ContextType, RequireFields<QueryKnowledgeBasisArgs, 'nodeId'>>;
  knowledgeBasisById?: Resolver<Maybe<ResolversTypes['KnowledgeBasis']>, ParentType, ContextType, RequireFields<QueryKnowledgeBasisByIdArgs, 'id'>>;
  knowledgebaseTranslationStatusColor_?: Resolver<Maybe<Array<Maybe<ResolversTypes['KnowledgebaseTranslationStatusColor']>>>, ParentType, ContextType, RequireFields<QueryKnowledgebaseTranslationStatusColor_Args, 'category_id' | 'filter_by' | 'knowledge_base_id'>>;
  knowledgebaseTranslations_?: Resolver<Maybe<Array<Maybe<ResolversTypes['KnowledgebaseTranslationType']>>>, ParentType, ContextType, RequireFields<QueryKnowledgebaseTranslations_Args, 'knowledge_base_id'>>;
  knowledgebase_?: Resolver<Maybe<ResolversTypes['Knowledgebase']>, ParentType, ContextType, RequireFields<QueryKnowledgebase_Args, 'knowledge_base_id'>>;
  knowledgebases_?: Resolver<Maybe<Array<Maybe<ResolversTypes['Knowledgebase']>>>, ParentType, ContextType>;
  locale?: Resolver<Maybe<ResolversTypes['Locale']>, ParentType, ContextType, RequireFields<QueryLocaleArgs, 'nodeId'>>;
  localeById?: Resolver<Maybe<ResolversTypes['Locale']>, ParentType, ContextType, RequireFields<QueryLocaleByIdArgs, 'id'>>;
  node?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType, RequireFields<QueryNodeArgs, 'nodeId'>>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<QueryOrderArgs, 'orderId'>>;
  pet?: Resolver<Maybe<ResolversTypes['Pet']>, ParentType, ContextType, RequireFields<QueryPetArgs, 'petId'>>;
  petFindByStatus?: Resolver<Maybe<Array<Maybe<ResolversTypes['Pet']>>>, ParentType, ContextType, RequireFields<QueryPetFindByStatusArgs, 'status'>>;
  petFindByTags?: Resolver<Maybe<Array<Maybe<ResolversTypes['Pet']>>>, ParentType, ContextType, RequireFields<QueryPetFindByTagsArgs, 'tags'>>;
  ping?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  query?: Resolver<ResolversTypes['Query'], ParentType, ContextType>;
  storeInventory?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'username'>>;
  userLogin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QueryUserLoginArgs, 'password' | 'username'>>;
  userLogout?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
};

export type ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['Response'] = ResolversParentTypes['Response']> = {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StatusMessageForKnowledgeBaseCategoryScheduleTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['StatusMessageForKnowledgeBaseCategoryScheduleType'] = ResolversParentTypes['StatusMessageForKnowledgeBaseCategoryScheduleType']> = {
  data?: Resolver<Maybe<ResolversTypes['KnowledgeBaseCategoryScheduleType']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tag'] = ResolversParentTypes['Tag']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateActivityStreamPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateActivityStreamPayload'] = ResolversParentTypes['UpdateActivityStreamPayload']> = {
  activityStream?: Resolver<Maybe<ResolversTypes['ActivityStream']>, ParentType, ContextType>;
  activityStreamEdge?: Resolver<Maybe<ResolversTypes['ActivityStreamsEdge']>, ParentType, ContextType, RequireFields<UpdateActivityStreamPayloadActivityStreamEdgeArgs, 'orderBy'>>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateKnowledgeBaseArticleDelayedJobPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateKnowledgeBaseArticleDelayedJobPayload'] = ResolversParentTypes['UpdateKnowledgeBaseArticleDelayedJobPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  knowledgeBaseArticleDelayedJob?: Resolver<Maybe<ResolversTypes['KnowledgeBaseArticleDelayedJob']>, ParentType, ContextType>;
  knowledgeBaseArticleDelayedJobEdge?: Resolver<Maybe<ResolversTypes['KnowledgeBaseArticleDelayedJobsEdge']>, ParentType, ContextType, RequireFields<UpdateKnowledgeBaseArticleDelayedJobPayloadKnowledgeBaseArticleDelayedJobEdgeArgs, 'orderBy'>>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateKnowledgeBaseArticlePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateKnowledgeBaseArticlePayload'] = ResolversParentTypes['UpdateKnowledgeBaseArticlePayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  knowledgeBaseArticle?: Resolver<Maybe<ResolversTypes['KnowledgeBaseArticle']>, ParentType, ContextType>;
  knowledgeBaseArticleEdge?: Resolver<Maybe<ResolversTypes['KnowledgeBaseArticlesEdge']>, ParentType, ContextType, RequireFields<UpdateKnowledgeBaseArticlePayloadKnowledgeBaseArticleEdgeArgs, 'orderBy'>>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateKnowledgeBaseArticleTranslationPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateKnowledgeBaseArticleTranslationPayload'] = ResolversParentTypes['UpdateKnowledgeBaseArticleTranslationPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  knowledgeBaseArticleTranslation?: Resolver<Maybe<ResolversTypes['KnowledgeBaseArticleTranslation']>, ParentType, ContextType>;
  knowledgeBaseArticleTranslationEdge?: Resolver<Maybe<ResolversTypes['KnowledgeBaseArticleTranslationsEdge']>, ParentType, ContextType, RequireFields<UpdateKnowledgeBaseArticleTranslationPayloadKnowledgeBaseArticleTranslationEdgeArgs, 'orderBy'>>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateKnowledgeBaseCategoryDelayedJobPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateKnowledgeBaseCategoryDelayedJobPayload'] = ResolversParentTypes['UpdateKnowledgeBaseCategoryDelayedJobPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  knowledgeBaseCategoryDelayedJob?: Resolver<Maybe<ResolversTypes['KnowledgeBaseCategoryDelayedJob']>, ParentType, ContextType>;
  knowledgeBaseCategoryDelayedJobEdge?: Resolver<Maybe<ResolversTypes['KnowledgeBaseCategoryDelayedJobsEdge']>, ParentType, ContextType, RequireFields<UpdateKnowledgeBaseCategoryDelayedJobPayloadKnowledgeBaseCategoryDelayedJobEdgeArgs, 'orderBy'>>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateKnowledgeBaseCategoryPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateKnowledgeBaseCategoryPayload'] = ResolversParentTypes['UpdateKnowledgeBaseCategoryPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  knowledgeBaseCategory?: Resolver<Maybe<ResolversTypes['KnowledgeBaseCategory']>, ParentType, ContextType>;
  knowledgeBaseCategoryEdge?: Resolver<Maybe<ResolversTypes['KnowledgeBaseCategoriesEdge']>, ParentType, ContextType, RequireFields<UpdateKnowledgeBaseCategoryPayloadKnowledgeBaseCategoryEdgeArgs, 'orderBy'>>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateKnowledgeBaseCategoryTranslationPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateKnowledgeBaseCategoryTranslationPayload'] = ResolversParentTypes['UpdateKnowledgeBaseCategoryTranslationPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  knowledgeBaseCategoryTranslation?: Resolver<Maybe<ResolversTypes['KnowledgeBaseCategoryTranslation']>, ParentType, ContextType>;
  knowledgeBaseCategoryTranslationEdge?: Resolver<Maybe<ResolversTypes['KnowledgeBaseCategoryTranslationsEdge']>, ParentType, ContextType, RequireFields<UpdateKnowledgeBaseCategoryTranslationPayloadKnowledgeBaseCategoryTranslationEdgeArgs, 'orderBy'>>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateKnowledgeBaseListPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateKnowledgeBaseListPayload'] = ResolversParentTypes['UpdateKnowledgeBaseListPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  knowledgeBaseList?: Resolver<Maybe<ResolversTypes['KnowledgeBaseList']>, ParentType, ContextType>;
  knowledgeBaseListEdge?: Resolver<Maybe<ResolversTypes['KnowledgeBaseListsEdge']>, ParentType, ContextType, RequireFields<UpdateKnowledgeBaseListPayloadKnowledgeBaseListEdgeArgs, 'orderBy'>>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateKnowledgeBaseTranslationPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateKnowledgeBaseTranslationPayload'] = ResolversParentTypes['UpdateKnowledgeBaseTranslationPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  knowledgeBaseTranslation?: Resolver<Maybe<ResolversTypes['KnowledgeBaseTranslation']>, ParentType, ContextType>;
  knowledgeBaseTranslationEdge?: Resolver<Maybe<ResolversTypes['KnowledgeBaseTranslationsEdge']>, ParentType, ContextType, RequireFields<UpdateKnowledgeBaseTranslationPayloadKnowledgeBaseTranslationEdgeArgs, 'orderBy'>>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateKnowledgeBasisPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateKnowledgeBasisPayload'] = ResolversParentTypes['UpdateKnowledgeBasisPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  knowledgeBasis?: Resolver<Maybe<ResolversTypes['KnowledgeBasis']>, ParentType, ContextType>;
  knowledgeBasisEdge?: Resolver<Maybe<ResolversTypes['KnowledgeBasesEdge']>, ParentType, ContextType, RequireFields<UpdateKnowledgeBasisPayloadKnowledgeBasisEdgeArgs, 'orderBy'>>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateLocalePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateLocalePayload'] = ResolversParentTypes['UpdateLocalePayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  locale?: Resolver<Maybe<ResolversTypes['Locale']>, ParentType, ContextType>;
  localeEdge?: Resolver<Maybe<ResolversTypes['LocalesEdge']>, ParentType, ContextType, RequireFields<UpdateLocalePayloadLocaleEdgeArgs, 'orderBy'>>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userStatus?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  ActivityStream?: ActivityStreamResolvers<ContextType>;
  ActivityStreamsConnection?: ActivityStreamsConnectionResolvers<ContextType>;
  ActivityStreamsEdge?: ActivityStreamsEdgeResolvers<ContextType>;
  ApiResponse?: ApiResponseResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  CreateActivityStreamPayload?: CreateActivityStreamPayloadResolvers<ContextType>;
  CreateKnowledgeBaseArticleDelayedJobPayload?: CreateKnowledgeBaseArticleDelayedJobPayloadResolvers<ContextType>;
  CreateKnowledgeBaseArticlePayload?: CreateKnowledgeBaseArticlePayloadResolvers<ContextType>;
  CreateKnowledgeBaseArticleTranslationPayload?: CreateKnowledgeBaseArticleTranslationPayloadResolvers<ContextType>;
  CreateKnowledgeBaseCategoryDelayedJobPayload?: CreateKnowledgeBaseCategoryDelayedJobPayloadResolvers<ContextType>;
  CreateKnowledgeBaseCategoryPayload?: CreateKnowledgeBaseCategoryPayloadResolvers<ContextType>;
  CreateKnowledgeBaseCategoryTranslationPayload?: CreateKnowledgeBaseCategoryTranslationPayloadResolvers<ContextType>;
  CreateKnowledgeBaseListPayload?: CreateKnowledgeBaseListPayloadResolvers<ContextType>;
  CreateKnowledgeBaseTranslationPayload?: CreateKnowledgeBaseTranslationPayloadResolvers<ContextType>;
  CreateKnowledgeBasisPayload?: CreateKnowledgeBasisPayloadResolvers<ContextType>;
  CreateLocalePayload?: CreateLocalePayloadResolvers<ContextType>;
  Cursor?: GraphQLScalarType;
  Datetime?: GraphQLScalarType;
  DeleteActivityStreamPayload?: DeleteActivityStreamPayloadResolvers<ContextType>;
  DeleteKnowledgeBaseArticleDelayedJobPayload?: DeleteKnowledgeBaseArticleDelayedJobPayloadResolvers<ContextType>;
  DeleteKnowledgeBaseArticlePayload?: DeleteKnowledgeBaseArticlePayloadResolvers<ContextType>;
  DeleteKnowledgeBaseArticleTranslationPayload?: DeleteKnowledgeBaseArticleTranslationPayloadResolvers<ContextType>;
  DeleteKnowledgeBaseCategoryDelayedJobPayload?: DeleteKnowledgeBaseCategoryDelayedJobPayloadResolvers<ContextType>;
  DeleteKnowledgeBaseCategoryPayload?: DeleteKnowledgeBaseCategoryPayloadResolvers<ContextType>;
  DeleteKnowledgeBaseCategoryTranslationPayload?: DeleteKnowledgeBaseCategoryTranslationPayloadResolvers<ContextType>;
  DeleteKnowledgeBaseListPayload?: DeleteKnowledgeBaseListPayloadResolvers<ContextType>;
  DeleteKnowledgeBaseTranslationPayload?: DeleteKnowledgeBaseTranslationPayloadResolvers<ContextType>;
  DeleteKnowledgeBasisPayload?: DeleteKnowledgeBasisPayloadResolvers<ContextType>;
  DeleteLocalePayload?: DeleteLocalePayloadResolvers<ContextType>;
  ExportKnowledgeBaseType?: ExportKnowledgeBaseTypeResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  KnowledgeBaseArticle?: KnowledgeBaseArticleResolvers<ContextType>;
  KnowledgeBaseArticleDelayedJob?: KnowledgeBaseArticleDelayedJobResolvers<ContextType>;
  KnowledgeBaseArticleDelayedJobType?: KnowledgeBaseArticleDelayedJobTypeResolvers<ContextType>;
  KnowledgeBaseArticleDelayedJobsConnection?: KnowledgeBaseArticleDelayedJobsConnectionResolvers<ContextType>;
  KnowledgeBaseArticleDelayedJobsEdge?: KnowledgeBaseArticleDelayedJobsEdgeResolvers<ContextType>;
  KnowledgeBaseArticleTranslation?: KnowledgeBaseArticleTranslationResolvers<ContextType>;
  KnowledgeBaseArticleTranslationsConnection?: KnowledgeBaseArticleTranslationsConnectionResolvers<ContextType>;
  KnowledgeBaseArticleTranslationsEdge?: KnowledgeBaseArticleTranslationsEdgeResolvers<ContextType>;
  KnowledgeBaseArticleType?: KnowledgeBaseArticleTypeResolvers<ContextType>;
  KnowledgeBaseArticlesConnection?: KnowledgeBaseArticlesConnectionResolvers<ContextType>;
  KnowledgeBaseArticlesEdge?: KnowledgeBaseArticlesEdgeResolvers<ContextType>;
  KnowledgeBaseCategoriesConnection?: KnowledgeBaseCategoriesConnectionResolvers<ContextType>;
  KnowledgeBaseCategoriesEdge?: KnowledgeBaseCategoriesEdgeResolvers<ContextType>;
  KnowledgeBaseCategory?: KnowledgeBaseCategoryResolvers<ContextType>;
  KnowledgeBaseCategoryDelayedJob?: KnowledgeBaseCategoryDelayedJobResolvers<ContextType>;
  KnowledgeBaseCategoryDelayedJobsConnection?: KnowledgeBaseCategoryDelayedJobsConnectionResolvers<ContextType>;
  KnowledgeBaseCategoryDelayedJobsEdge?: KnowledgeBaseCategoryDelayedJobsEdgeResolvers<ContextType>;
  KnowledgeBaseCategoryHybridStatType?: KnowledgeBaseCategoryHybridStatTypeResolvers<ContextType>;
  KnowledgeBaseCategoryHybridType?: KnowledgeBaseCategoryHybridTypeResolvers<ContextType>;
  KnowledgeBaseCategoryInfoType?: KnowledgeBaseCategoryInfoTypeResolvers<ContextType>;
  KnowledgeBaseCategoryLevelType?: KnowledgeBaseCategoryLevelTypeResolvers<ContextType>;
  KnowledgeBaseCategoryScheduleType?: KnowledgeBaseCategoryScheduleTypeResolvers<ContextType>;
  KnowledgeBaseCategoryStatType?: KnowledgeBaseCategoryStatTypeResolvers<ContextType>;
  KnowledgeBaseCategoryTranslation?: KnowledgeBaseCategoryTranslationResolvers<ContextType>;
  KnowledgeBaseCategoryTranslationType?: KnowledgeBaseCategoryTranslationTypeResolvers<ContextType>;
  KnowledgeBaseCategoryTranslationsConnection?: KnowledgeBaseCategoryTranslationsConnectionResolvers<ContextType>;
  KnowledgeBaseCategoryTranslationsEdge?: KnowledgeBaseCategoryTranslationsEdgeResolvers<ContextType>;
  KnowledgeBaseCategoryType?: KnowledgeBaseCategoryTypeResolvers<ContextType>;
  KnowledgeBaseLevelStatusDataType?: KnowledgeBaseLevelStatusDataTypeResolvers<ContextType>;
  KnowledgeBaseLevelStatusHybridType?: KnowledgeBaseLevelStatusHybridTypeResolvers<ContextType>;
  KnowledgeBaseLevelStatusType?: KnowledgeBaseLevelStatusTypeResolvers<ContextType>;
  KnowledgeBaseList?: KnowledgeBaseListResolvers<ContextType>;
  KnowledgeBaseListType?: KnowledgeBaseListTypeResolvers<ContextType>;
  KnowledgeBaseListsConnection?: KnowledgeBaseListsConnectionResolvers<ContextType>;
  KnowledgeBaseListsEdge?: KnowledgeBaseListsEdgeResolvers<ContextType>;
  KnowledgeBaseTranslation?: KnowledgeBaseTranslationResolvers<ContextType>;
  KnowledgeBaseTranslationsConnection?: KnowledgeBaseTranslationsConnectionResolvers<ContextType>;
  KnowledgeBaseTranslationsEdge?: KnowledgeBaseTranslationsEdgeResolvers<ContextType>;
  KnowledgeBasesConnection?: KnowledgeBasesConnectionResolvers<ContextType>;
  KnowledgeBasesEdge?: KnowledgeBasesEdgeResolvers<ContextType>;
  KnowledgeBasis?: KnowledgeBasisResolvers<ContextType>;
  Knowledgebase?: KnowledgebaseResolvers<ContextType>;
  KnowledgebaseTranslationStatusColor?: KnowledgebaseTranslationStatusColorResolvers<ContextType>;
  KnowledgebaseTranslationType?: KnowledgebaseTranslationTypeResolvers<ContextType>;
  Locale?: LocaleResolvers<ContextType>;
  LocalesConnection?: LocalesConnectionResolvers<ContextType>;
  LocalesEdge?: LocalesEdgeResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Node?: NodeResolvers<ContextType>;
  Order?: OrderResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  Pet?: PetResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Response?: ResponseResolvers<ContextType>;
  StatusMessageForKnowledgeBaseCategoryScheduleType?: StatusMessageForKnowledgeBaseCategoryScheduleTypeResolvers<ContextType>;
  Tag?: TagResolvers<ContextType>;
  UpdateActivityStreamPayload?: UpdateActivityStreamPayloadResolvers<ContextType>;
  UpdateKnowledgeBaseArticleDelayedJobPayload?: UpdateKnowledgeBaseArticleDelayedJobPayloadResolvers<ContextType>;
  UpdateKnowledgeBaseArticlePayload?: UpdateKnowledgeBaseArticlePayloadResolvers<ContextType>;
  UpdateKnowledgeBaseArticleTranslationPayload?: UpdateKnowledgeBaseArticleTranslationPayloadResolvers<ContextType>;
  UpdateKnowledgeBaseCategoryDelayedJobPayload?: UpdateKnowledgeBaseCategoryDelayedJobPayloadResolvers<ContextType>;
  UpdateKnowledgeBaseCategoryPayload?: UpdateKnowledgeBaseCategoryPayloadResolvers<ContextType>;
  UpdateKnowledgeBaseCategoryTranslationPayload?: UpdateKnowledgeBaseCategoryTranslationPayloadResolvers<ContextType>;
  UpdateKnowledgeBaseListPayload?: UpdateKnowledgeBaseListPayloadResolvers<ContextType>;
  UpdateKnowledgeBaseTranslationPayload?: UpdateKnowledgeBaseTranslationPayloadResolvers<ContextType>;
  UpdateKnowledgeBasisPayload?: UpdateKnowledgeBasisPayloadResolvers<ContextType>;
  UpdateLocalePayload?: UpdateLocalePayloadResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
};

