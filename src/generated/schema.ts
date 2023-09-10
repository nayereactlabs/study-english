// @ts-nocheck
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Scalars = {
    Boolean: boolean,
    Int: number,
    String: string,
    jsonb: any,
}


/** ordering argument of a cursor */
export type cursor_ordering = 'ASC' | 'DESC'


/** mutation root */
export interface mutation_root {
    /** delete data from the table: "pictionary" */
    delete_pictionary: (pictionary_mutation_response | null)
    /** delete single row from the table: "pictionary" */
    delete_pictionary_by_pk: (pictionary | null)
    /** delete data from the table: "trivia_type" */
    delete_trivia_type: (trivia_type_mutation_response | null)
    /** delete single row from the table: "trivia_type" */
    delete_trivia_type_by_pk: (trivia_type | null)
    /** insert data into the table: "pictionary" */
    insert_pictionary: (pictionary_mutation_response | null)
    /** insert a single row into the table: "pictionary" */
    insert_pictionary_one: (pictionary | null)
    /** insert data into the table: "trivia_type" */
    insert_trivia_type: (trivia_type_mutation_response | null)
    /** insert a single row into the table: "trivia_type" */
    insert_trivia_type_one: (trivia_type | null)
    /** update data of the table: "pictionary" */
    update_pictionary: (pictionary_mutation_response | null)
    /** update single row of the table: "pictionary" */
    update_pictionary_by_pk: (pictionary | null)
    /** update multiples rows of table: "pictionary" */
    update_pictionary_many: ((pictionary_mutation_response | null)[] | null)
    /** update data of the table: "trivia_type" */
    update_trivia_type: (trivia_type_mutation_response | null)
    /** update single row of the table: "trivia_type" */
    update_trivia_type_by_pk: (trivia_type | null)
    /** update multiples rows of table: "trivia_type" */
    update_trivia_type_many: ((trivia_type_mutation_response | null)[] | null)
    __typename: 'mutation_root'
}


/** column ordering options */
export type order_by = 'asc' | 'asc_nulls_first' | 'asc_nulls_last' | 'desc' | 'desc_nulls_first' | 'desc_nulls_last'


/** columns and relationships of "pictionary" */
export interface pictionary {
    metadata: (Scalars['jsonb'] | null)
    src: (Scalars['jsonb'] | null)
    word: Scalars['String']
    __typename: 'pictionary'
}


/** aggregated selection of "pictionary" */
export interface pictionary_aggregate {
    aggregate: (pictionary_aggregate_fields | null)
    nodes: pictionary[]
    __typename: 'pictionary_aggregate'
}


/** aggregate fields of "pictionary" */
export interface pictionary_aggregate_fields {
    count: Scalars['Int']
    max: (pictionary_max_fields | null)
    min: (pictionary_min_fields | null)
    __typename: 'pictionary_aggregate_fields'
}


/** unique or primary key constraints on table "pictionary" */
export type pictionary_constraint = 'pictionary_pkey'


/** aggregate max on columns */
export interface pictionary_max_fields {
    word: (Scalars['String'] | null)
    __typename: 'pictionary_max_fields'
}


/** aggregate min on columns */
export interface pictionary_min_fields {
    word: (Scalars['String'] | null)
    __typename: 'pictionary_min_fields'
}


/** response of any mutation on the table "pictionary" */
export interface pictionary_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: pictionary[]
    __typename: 'pictionary_mutation_response'
}


/** select columns of table "pictionary" */
export type pictionary_select_column = 'metadata' | 'src' | 'word'


/** update columns of table "pictionary" */
export type pictionary_update_column = 'metadata' | 'src' | 'word'

export interface query_root {
    /** fetch data from the table: "pictionary" */
    pictionary: pictionary[]
    /** fetch aggregated fields from the table: "pictionary" */
    pictionary_aggregate: pictionary_aggregate
    /** fetch data from the table: "pictionary" using primary key columns */
    pictionary_by_pk: (pictionary | null)
    /** fetch data from the table: "trivia_type" */
    trivia_type: trivia_type[]
    /** fetch aggregated fields from the table: "trivia_type" */
    trivia_type_aggregate: trivia_type_aggregate
    /** fetch data from the table: "trivia_type" using primary key columns */
    trivia_type_by_pk: (trivia_type | null)
    __typename: 'query_root'
}

export interface subscription_root {
    /** fetch data from the table: "pictionary" */
    pictionary: pictionary[]
    /** fetch aggregated fields from the table: "pictionary" */
    pictionary_aggregate: pictionary_aggregate
    /** fetch data from the table: "pictionary" using primary key columns */
    pictionary_by_pk: (pictionary | null)
    /** fetch data from the table in a streaming manner: "pictionary" */
    pictionary_stream: pictionary[]
    /** fetch data from the table: "trivia_type" */
    trivia_type: trivia_type[]
    /** fetch aggregated fields from the table: "trivia_type" */
    trivia_type_aggregate: trivia_type_aggregate
    /** fetch data from the table: "trivia_type" using primary key columns */
    trivia_type_by_pk: (trivia_type | null)
    /** fetch data from the table in a streaming manner: "trivia_type" */
    trivia_type_stream: trivia_type[]
    __typename: 'subscription_root'
}


/** columns and relationships of "trivia_type" */
export interface trivia_type {
    value: Scalars['String']
    __typename: 'trivia_type'
}


/** aggregated selection of "trivia_type" */
export interface trivia_type_aggregate {
    aggregate: (trivia_type_aggregate_fields | null)
    nodes: trivia_type[]
    __typename: 'trivia_type_aggregate'
}


/** aggregate fields of "trivia_type" */
export interface trivia_type_aggregate_fields {
    count: Scalars['Int']
    max: (trivia_type_max_fields | null)
    min: (trivia_type_min_fields | null)
    __typename: 'trivia_type_aggregate_fields'
}


/** unique or primary key constraints on table "trivia_type" */
export type trivia_type_constraint = 'trivia_type_pkey'


/** aggregate max on columns */
export interface trivia_type_max_fields {
    value: (Scalars['String'] | null)
    __typename: 'trivia_type_max_fields'
}


/** aggregate min on columns */
export interface trivia_type_min_fields {
    value: (Scalars['String'] | null)
    __typename: 'trivia_type_min_fields'
}


/** response of any mutation on the table "trivia_type" */
export interface trivia_type_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: trivia_type[]
    __typename: 'trivia_type_mutation_response'
}


/** select columns of table "trivia_type" */
export type trivia_type_select_column = 'value'


/** update columns of table "trivia_type" */
export type trivia_type_update_column = 'value'

export type Query = query_root
export type Mutation = mutation_root
export type Subscription = subscription_root


/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export interface String_comparison_exp {_eq?: (Scalars['String'] | null),_gt?: (Scalars['String'] | null),_gte?: (Scalars['String'] | null),
/** does the column match the given case-insensitive pattern */
_ilike?: (Scalars['String'] | null),_in?: (Scalars['String'][] | null),
/** does the column match the given POSIX regular expression, case insensitive */
_iregex?: (Scalars['String'] | null),_is_null?: (Scalars['Boolean'] | null),
/** does the column match the given pattern */
_like?: (Scalars['String'] | null),_lt?: (Scalars['String'] | null),_lte?: (Scalars['String'] | null),_neq?: (Scalars['String'] | null),
/** does the column NOT match the given case-insensitive pattern */
_nilike?: (Scalars['String'] | null),_nin?: (Scalars['String'][] | null),
/** does the column NOT match the given POSIX regular expression, case insensitive */
_niregex?: (Scalars['String'] | null),
/** does the column NOT match the given pattern */
_nlike?: (Scalars['String'] | null),
/** does the column NOT match the given POSIX regular expression, case sensitive */
_nregex?: (Scalars['String'] | null),
/** does the column NOT match the given SQL regular expression */
_nsimilar?: (Scalars['String'] | null),
/** does the column match the given POSIX regular expression, case sensitive */
_regex?: (Scalars['String'] | null),
/** does the column match the given SQL regular expression */
_similar?: (Scalars['String'] | null)}

export interface jsonb_cast_exp {String?: (String_comparison_exp | null)}


/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export interface jsonb_comparison_exp {_cast?: (jsonb_cast_exp | null),
/** is the column contained in the given json value */
_contained_in?: (Scalars['jsonb'] | null),
/** does the column contain the given json value at the top level */
_contains?: (Scalars['jsonb'] | null),_eq?: (Scalars['jsonb'] | null),_gt?: (Scalars['jsonb'] | null),_gte?: (Scalars['jsonb'] | null),
/** does the string exist as a top-level key in the column */
_has_key?: (Scalars['String'] | null),
/** do all of these strings exist as top-level keys in the column */
_has_keys_all?: (Scalars['String'][] | null),
/** do any of these strings exist as top-level keys in the column */
_has_keys_any?: (Scalars['String'][] | null),_in?: (Scalars['jsonb'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['jsonb'] | null),_lte?: (Scalars['jsonb'] | null),_neq?: (Scalars['jsonb'] | null),_nin?: (Scalars['jsonb'][] | null)}


/** mutation root */
export interface mutation_rootGenqlSelection{
    /** delete data from the table: "pictionary" */
    delete_pictionary?: (pictionary_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: pictionary_bool_exp} })
    /** delete single row from the table: "pictionary" */
    delete_pictionary_by_pk?: (pictionaryGenqlSelection & { __args: {word: Scalars['String']} })
    /** delete data from the table: "trivia_type" */
    delete_trivia_type?: (trivia_type_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: trivia_type_bool_exp} })
    /** delete single row from the table: "trivia_type" */
    delete_trivia_type_by_pk?: (trivia_typeGenqlSelection & { __args: {value: Scalars['String']} })
    /** insert data into the table: "pictionary" */
    insert_pictionary?: (pictionary_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: pictionary_insert_input[], 
    /** upsert condition */
    on_conflict?: (pictionary_on_conflict | null)} })
    /** insert a single row into the table: "pictionary" */
    insert_pictionary_one?: (pictionaryGenqlSelection & { __args: {
    /** the row to be inserted */
    object: pictionary_insert_input, 
    /** upsert condition */
    on_conflict?: (pictionary_on_conflict | null)} })
    /** insert data into the table: "trivia_type" */
    insert_trivia_type?: (trivia_type_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: trivia_type_insert_input[], 
    /** upsert condition */
    on_conflict?: (trivia_type_on_conflict | null)} })
    /** insert a single row into the table: "trivia_type" */
    insert_trivia_type_one?: (trivia_typeGenqlSelection & { __args: {
    /** the row to be inserted */
    object: trivia_type_insert_input, 
    /** upsert condition */
    on_conflict?: (trivia_type_on_conflict | null)} })
    /** update data of the table: "pictionary" */
    update_pictionary?: (pictionary_mutation_responseGenqlSelection & { __args: {
    /** append existing jsonb value of filtered columns with new jsonb value */
    _append?: (pictionary_append_input | null), 
    /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
    _delete_at_path?: (pictionary_delete_at_path_input | null), 
    /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
    _delete_elem?: (pictionary_delete_elem_input | null), 
    /** delete key/value pair or string element. key/value pairs are matched based on their key value */
    _delete_key?: (pictionary_delete_key_input | null), 
    /** prepend existing jsonb value of filtered columns with new jsonb value */
    _prepend?: (pictionary_prepend_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (pictionary_set_input | null), 
    /** filter the rows which have to be updated */
    where: pictionary_bool_exp} })
    /** update single row of the table: "pictionary" */
    update_pictionary_by_pk?: (pictionaryGenqlSelection & { __args: {
    /** append existing jsonb value of filtered columns with new jsonb value */
    _append?: (pictionary_append_input | null), 
    /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
    _delete_at_path?: (pictionary_delete_at_path_input | null), 
    /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
    _delete_elem?: (pictionary_delete_elem_input | null), 
    /** delete key/value pair or string element. key/value pairs are matched based on their key value */
    _delete_key?: (pictionary_delete_key_input | null), 
    /** prepend existing jsonb value of filtered columns with new jsonb value */
    _prepend?: (pictionary_prepend_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (pictionary_set_input | null), pk_columns: pictionary_pk_columns_input} })
    /** update multiples rows of table: "pictionary" */
    update_pictionary_many?: (pictionary_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: pictionary_updates[]} })
    /** update data of the table: "trivia_type" */
    update_trivia_type?: (trivia_type_mutation_responseGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (trivia_type_set_input | null), 
    /** filter the rows which have to be updated */
    where: trivia_type_bool_exp} })
    /** update single row of the table: "trivia_type" */
    update_trivia_type_by_pk?: (trivia_typeGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (trivia_type_set_input | null), pk_columns: trivia_type_pk_columns_input} })
    /** update multiples rows of table: "trivia_type" */
    update_trivia_type_many?: (trivia_type_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: trivia_type_updates[]} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** columns and relationships of "pictionary" */
export interface pictionaryGenqlSelection{
    metadata?: { __args: {
    /** JSON select path */
    path?: (Scalars['String'] | null)} } | boolean | number
    src?: { __args: {
    /** JSON select path */
    path?: (Scalars['String'] | null)} } | boolean | number
    word?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "pictionary" */
export interface pictionary_aggregateGenqlSelection{
    aggregate?: pictionary_aggregate_fieldsGenqlSelection
    nodes?: pictionaryGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "pictionary" */
export interface pictionary_aggregate_fieldsGenqlSelection{
    count?: { __args: {columns?: (pictionary_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: pictionary_max_fieldsGenqlSelection
    min?: pictionary_min_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** append existing jsonb value of filtered columns with new jsonb value */
export interface pictionary_append_input {metadata?: (Scalars['jsonb'] | null),src?: (Scalars['jsonb'] | null)}


/** Boolean expression to filter rows from the table "pictionary". All fields are combined with a logical 'AND'. */
export interface pictionary_bool_exp {_and?: (pictionary_bool_exp[] | null),_not?: (pictionary_bool_exp | null),_or?: (pictionary_bool_exp[] | null),metadata?: (jsonb_comparison_exp | null),src?: (jsonb_comparison_exp | null),word?: (String_comparison_exp | null)}


/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export interface pictionary_delete_at_path_input {metadata?: (Scalars['String'][] | null),src?: (Scalars['String'][] | null)}


/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export interface pictionary_delete_elem_input {metadata?: (Scalars['Int'] | null),src?: (Scalars['Int'] | null)}


/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export interface pictionary_delete_key_input {metadata?: (Scalars['String'] | null),src?: (Scalars['String'] | null)}


/** input type for inserting data into table "pictionary" */
export interface pictionary_insert_input {metadata?: (Scalars['jsonb'] | null),src?: (Scalars['jsonb'] | null),word?: (Scalars['String'] | null)}


/** aggregate max on columns */
export interface pictionary_max_fieldsGenqlSelection{
    word?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface pictionary_min_fieldsGenqlSelection{
    word?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "pictionary" */
export interface pictionary_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: pictionaryGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "pictionary" */
export interface pictionary_on_conflict {constraint?: pictionary_constraint,update_columns?: pictionary_update_column[],where?: (pictionary_bool_exp | null)}


/** Ordering options when selecting data from "pictionary". */
export interface pictionary_order_by {metadata?: (order_by | null),src?: (order_by | null),word?: (order_by | null)}


/** primary key columns input for table: pictionary */
export interface pictionary_pk_columns_input {word?: Scalars['String']}


/** prepend existing jsonb value of filtered columns with new jsonb value */
export interface pictionary_prepend_input {metadata?: (Scalars['jsonb'] | null),src?: (Scalars['jsonb'] | null)}


/** input type for updating data in table "pictionary" */
export interface pictionary_set_input {metadata?: (Scalars['jsonb'] | null),src?: (Scalars['jsonb'] | null),word?: (Scalars['String'] | null)}


/** Streaming cursor of the table "pictionary" */
export interface pictionary_stream_cursor_input {
/** Stream column input with initial value */
initial_value?: pictionary_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface pictionary_stream_cursor_value_input {metadata?: (Scalars['jsonb'] | null),src?: (Scalars['jsonb'] | null),word?: (Scalars['String'] | null)}

export interface pictionary_updates {
/** append existing jsonb value of filtered columns with new jsonb value */
_append?: (pictionary_append_input | null),
/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
_delete_at_path?: (pictionary_delete_at_path_input | null),
/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
_delete_elem?: (pictionary_delete_elem_input | null),
/** delete key/value pair or string element. key/value pairs are matched based on their key value */
_delete_key?: (pictionary_delete_key_input | null),
/** prepend existing jsonb value of filtered columns with new jsonb value */
_prepend?: (pictionary_prepend_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (pictionary_set_input | null),
/** filter the rows which have to be updated */
where?: pictionary_bool_exp}

export interface query_rootGenqlSelection{
    /** fetch data from the table: "pictionary" */
    pictionary?: (pictionaryGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (pictionary_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (pictionary_order_by[] | null), 
    /** filter the rows returned */
    where?: (pictionary_bool_exp | null)} })
    /** fetch aggregated fields from the table: "pictionary" */
    pictionary_aggregate?: (pictionary_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (pictionary_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (pictionary_order_by[] | null), 
    /** filter the rows returned */
    where?: (pictionary_bool_exp | null)} })
    /** fetch data from the table: "pictionary" using primary key columns */
    pictionary_by_pk?: (pictionaryGenqlSelection & { __args: {word: Scalars['String']} })
    /** fetch data from the table: "trivia_type" */
    trivia_type?: (trivia_typeGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (trivia_type_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (trivia_type_order_by[] | null), 
    /** filter the rows returned */
    where?: (trivia_type_bool_exp | null)} })
    /** fetch aggregated fields from the table: "trivia_type" */
    trivia_type_aggregate?: (trivia_type_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (trivia_type_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (trivia_type_order_by[] | null), 
    /** filter the rows returned */
    where?: (trivia_type_bool_exp | null)} })
    /** fetch data from the table: "trivia_type" using primary key columns */
    trivia_type_by_pk?: (trivia_typeGenqlSelection & { __args: {value: Scalars['String']} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface subscription_rootGenqlSelection{
    /** fetch data from the table: "pictionary" */
    pictionary?: (pictionaryGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (pictionary_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (pictionary_order_by[] | null), 
    /** filter the rows returned */
    where?: (pictionary_bool_exp | null)} })
    /** fetch aggregated fields from the table: "pictionary" */
    pictionary_aggregate?: (pictionary_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (pictionary_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (pictionary_order_by[] | null), 
    /** filter the rows returned */
    where?: (pictionary_bool_exp | null)} })
    /** fetch data from the table: "pictionary" using primary key columns */
    pictionary_by_pk?: (pictionaryGenqlSelection & { __args: {word: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "pictionary" */
    pictionary_stream?: (pictionaryGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (pictionary_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (pictionary_bool_exp | null)} })
    /** fetch data from the table: "trivia_type" */
    trivia_type?: (trivia_typeGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (trivia_type_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (trivia_type_order_by[] | null), 
    /** filter the rows returned */
    where?: (trivia_type_bool_exp | null)} })
    /** fetch aggregated fields from the table: "trivia_type" */
    trivia_type_aggregate?: (trivia_type_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (trivia_type_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (trivia_type_order_by[] | null), 
    /** filter the rows returned */
    where?: (trivia_type_bool_exp | null)} })
    /** fetch data from the table: "trivia_type" using primary key columns */
    trivia_type_by_pk?: (trivia_typeGenqlSelection & { __args: {value: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "trivia_type" */
    trivia_type_stream?: (trivia_typeGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (trivia_type_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (trivia_type_bool_exp | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** columns and relationships of "trivia_type" */
export interface trivia_typeGenqlSelection{
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "trivia_type" */
export interface trivia_type_aggregateGenqlSelection{
    aggregate?: trivia_type_aggregate_fieldsGenqlSelection
    nodes?: trivia_typeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "trivia_type" */
export interface trivia_type_aggregate_fieldsGenqlSelection{
    count?: { __args: {columns?: (trivia_type_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: trivia_type_max_fieldsGenqlSelection
    min?: trivia_type_min_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "trivia_type". All fields are combined with a logical 'AND'. */
export interface trivia_type_bool_exp {_and?: (trivia_type_bool_exp[] | null),_not?: (trivia_type_bool_exp | null),_or?: (trivia_type_bool_exp[] | null),value?: (String_comparison_exp | null)}


/** input type for inserting data into table "trivia_type" */
export interface trivia_type_insert_input {value?: (Scalars['String'] | null)}


/** aggregate max on columns */
export interface trivia_type_max_fieldsGenqlSelection{
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface trivia_type_min_fieldsGenqlSelection{
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "trivia_type" */
export interface trivia_type_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: trivia_typeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "trivia_type" */
export interface trivia_type_on_conflict {constraint?: trivia_type_constraint,update_columns?: trivia_type_update_column[],where?: (trivia_type_bool_exp | null)}


/** Ordering options when selecting data from "trivia_type". */
export interface trivia_type_order_by {value?: (order_by | null)}


/** primary key columns input for table: trivia_type */
export interface trivia_type_pk_columns_input {value?: Scalars['String']}


/** input type for updating data in table "trivia_type" */
export interface trivia_type_set_input {value?: (Scalars['String'] | null)}


/** Streaming cursor of the table "trivia_type" */
export interface trivia_type_stream_cursor_input {
/** Stream column input with initial value */
initial_value?: trivia_type_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface trivia_type_stream_cursor_value_input {value?: (Scalars['String'] | null)}

export interface trivia_type_updates {
/** sets the columns of the filtered rows to the given values */
_set?: (trivia_type_set_input | null),
/** filter the rows which have to be updated */
where?: trivia_type_bool_exp}

export type QueryGenqlSelection = query_rootGenqlSelection
export type MutationGenqlSelection = mutation_rootGenqlSelection
export type SubscriptionGenqlSelection = subscription_rootGenqlSelection


    const mutation_root_possibleTypes: string[] = ['mutation_root']
    export const ismutation_root = (obj?: { __typename?: any } | null): obj is mutation_root => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismutation_root"')
      return mutation_root_possibleTypes.includes(obj.__typename)
    }
    


    const pictionary_possibleTypes: string[] = ['pictionary']
    export const ispictionary = (obj?: { __typename?: any } | null): obj is pictionary => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispictionary"')
      return pictionary_possibleTypes.includes(obj.__typename)
    }
    


    const pictionary_aggregate_possibleTypes: string[] = ['pictionary_aggregate']
    export const ispictionary_aggregate = (obj?: { __typename?: any } | null): obj is pictionary_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispictionary_aggregate"')
      return pictionary_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const pictionary_aggregate_fields_possibleTypes: string[] = ['pictionary_aggregate_fields']
    export const ispictionary_aggregate_fields = (obj?: { __typename?: any } | null): obj is pictionary_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispictionary_aggregate_fields"')
      return pictionary_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const pictionary_max_fields_possibleTypes: string[] = ['pictionary_max_fields']
    export const ispictionary_max_fields = (obj?: { __typename?: any } | null): obj is pictionary_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispictionary_max_fields"')
      return pictionary_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const pictionary_min_fields_possibleTypes: string[] = ['pictionary_min_fields']
    export const ispictionary_min_fields = (obj?: { __typename?: any } | null): obj is pictionary_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispictionary_min_fields"')
      return pictionary_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const pictionary_mutation_response_possibleTypes: string[] = ['pictionary_mutation_response']
    export const ispictionary_mutation_response = (obj?: { __typename?: any } | null): obj is pictionary_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispictionary_mutation_response"')
      return pictionary_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const query_root_possibleTypes: string[] = ['query_root']
    export const isquery_root = (obj?: { __typename?: any } | null): obj is query_root => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isquery_root"')
      return query_root_possibleTypes.includes(obj.__typename)
    }
    


    const subscription_root_possibleTypes: string[] = ['subscription_root']
    export const issubscription_root = (obj?: { __typename?: any } | null): obj is subscription_root => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issubscription_root"')
      return subscription_root_possibleTypes.includes(obj.__typename)
    }
    


    const trivia_type_possibleTypes: string[] = ['trivia_type']
    export const istrivia_type = (obj?: { __typename?: any } | null): obj is trivia_type => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istrivia_type"')
      return trivia_type_possibleTypes.includes(obj.__typename)
    }
    


    const trivia_type_aggregate_possibleTypes: string[] = ['trivia_type_aggregate']
    export const istrivia_type_aggregate = (obj?: { __typename?: any } | null): obj is trivia_type_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istrivia_type_aggregate"')
      return trivia_type_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const trivia_type_aggregate_fields_possibleTypes: string[] = ['trivia_type_aggregate_fields']
    export const istrivia_type_aggregate_fields = (obj?: { __typename?: any } | null): obj is trivia_type_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istrivia_type_aggregate_fields"')
      return trivia_type_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const trivia_type_max_fields_possibleTypes: string[] = ['trivia_type_max_fields']
    export const istrivia_type_max_fields = (obj?: { __typename?: any } | null): obj is trivia_type_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istrivia_type_max_fields"')
      return trivia_type_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const trivia_type_min_fields_possibleTypes: string[] = ['trivia_type_min_fields']
    export const istrivia_type_min_fields = (obj?: { __typename?: any } | null): obj is trivia_type_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istrivia_type_min_fields"')
      return trivia_type_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const trivia_type_mutation_response_possibleTypes: string[] = ['trivia_type_mutation_response']
    export const istrivia_type_mutation_response = (obj?: { __typename?: any } | null): obj is trivia_type_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istrivia_type_mutation_response"')
      return trivia_type_mutation_response_possibleTypes.includes(obj.__typename)
    }
    

export const enumCursorOrdering = {
   ASC: 'ASC' as const,
   DESC: 'DESC' as const
}

export const enumOrderBy = {
   asc: 'asc' as const,
   asc_nulls_first: 'asc_nulls_first' as const,
   asc_nulls_last: 'asc_nulls_last' as const,
   desc: 'desc' as const,
   desc_nulls_first: 'desc_nulls_first' as const,
   desc_nulls_last: 'desc_nulls_last' as const
}

export const enumPictionaryConstraint = {
   pictionary_pkey: 'pictionary_pkey' as const
}

export const enumPictionarySelectColumn = {
   metadata: 'metadata' as const,
   src: 'src' as const,
   word: 'word' as const
}

export const enumPictionaryUpdateColumn = {
   metadata: 'metadata' as const,
   src: 'src' as const,
   word: 'word' as const
}

export const enumTriviaTypeConstraint = {
   trivia_type_pkey: 'trivia_type_pkey' as const
}

export const enumTriviaTypeSelectColumn = {
   value: 'value' as const
}

export const enumTriviaTypeUpdateColumn = {
   value: 'value' as const
}
