export default {
    "scalars": [
        0,
        1,
        2,
        4,
        5,
        8,
        14,
        26,
        30,
        36,
        44,
        48
    ],
    "types": {
        "Boolean": {},
        "Int": {},
        "String": {},
        "String_comparison_exp": {
            "_eq": [
                2
            ],
            "_gt": [
                2
            ],
            "_gte": [
                2
            ],
            "_ilike": [
                2
            ],
            "_in": [
                2
            ],
            "_iregex": [
                2
            ],
            "_is_null": [
                0
            ],
            "_like": [
                2
            ],
            "_lt": [
                2
            ],
            "_lte": [
                2
            ],
            "_neq": [
                2
            ],
            "_nilike": [
                2
            ],
            "_nin": [
                2
            ],
            "_niregex": [
                2
            ],
            "_nlike": [
                2
            ],
            "_nregex": [
                2
            ],
            "_nsimilar": [
                2
            ],
            "_regex": [
                2
            ],
            "_similar": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "cursor_ordering": {},
        "jsonb": {},
        "jsonb_cast_exp": {
            "String": [
                3
            ],
            "__typename": [
                2
            ]
        },
        "jsonb_comparison_exp": {
            "_cast": [
                6
            ],
            "_contained_in": [
                5
            ],
            "_contains": [
                5
            ],
            "_eq": [
                5
            ],
            "_gt": [
                5
            ],
            "_gte": [
                5
            ],
            "_has_key": [
                2
            ],
            "_has_keys_all": [
                2
            ],
            "_has_keys_any": [
                2
            ],
            "_in": [
                5
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                5
            ],
            "_lte": [
                5
            ],
            "_neq": [
                5
            ],
            "_nin": [
                5
            ],
            "__typename": [
                2
            ]
        },
        "order_by": {},
        "pictionary": {
            "metadata": [
                5,
                {
                    "path": [
                        2
                    ]
                }
            ],
            "src": [
                5,
                {
                    "path": [
                        2
                    ]
                }
            ],
            "word": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "pictionary_aggregate": {
            "aggregate": [
                11
            ],
            "nodes": [
                9
            ],
            "__typename": [
                2
            ]
        },
        "pictionary_aggregate_fields": {
            "count": [
                1,
                {
                    "columns": [
                        26,
                        "[pictionary_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                19
            ],
            "min": [
                20
            ],
            "__typename": [
                2
            ]
        },
        "pictionary_append_input": {
            "metadata": [
                5
            ],
            "src": [
                5
            ],
            "__typename": [
                2
            ]
        },
        "pictionary_bool_exp": {
            "_and": [
                13
            ],
            "_not": [
                13
            ],
            "_or": [
                13
            ],
            "metadata": [
                7
            ],
            "src": [
                7
            ],
            "word": [
                3
            ],
            "__typename": [
                2
            ]
        },
        "pictionary_constraint": {},
        "pictionary_delete_at_path_input": {
            "metadata": [
                2
            ],
            "src": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "pictionary_delete_elem_input": {
            "metadata": [
                1
            ],
            "src": [
                1
            ],
            "__typename": [
                2
            ]
        },
        "pictionary_delete_key_input": {
            "metadata": [
                2
            ],
            "src": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "pictionary_insert_input": {
            "metadata": [
                5
            ],
            "src": [
                5
            ],
            "word": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "pictionary_max_fields": {
            "word": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "pictionary_min_fields": {
            "word": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "pictionary_mutation_response": {
            "affected_rows": [
                1
            ],
            "returning": [
                9
            ],
            "__typename": [
                2
            ]
        },
        "pictionary_on_conflict": {
            "constraint": [
                14
            ],
            "update_columns": [
                30
            ],
            "where": [
                13
            ],
            "__typename": [
                2
            ]
        },
        "pictionary_order_by": {
            "metadata": [
                8
            ],
            "src": [
                8
            ],
            "word": [
                8
            ],
            "__typename": [
                2
            ]
        },
        "pictionary_pk_columns_input": {
            "word": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "pictionary_prepend_input": {
            "metadata": [
                5
            ],
            "src": [
                5
            ],
            "__typename": [
                2
            ]
        },
        "pictionary_select_column": {},
        "pictionary_set_input": {
            "metadata": [
                5
            ],
            "src": [
                5
            ],
            "word": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "pictionary_stream_cursor_input": {
            "initial_value": [
                29
            ],
            "ordering": [
                4
            ],
            "__typename": [
                2
            ]
        },
        "pictionary_stream_cursor_value_input": {
            "metadata": [
                5
            ],
            "src": [
                5
            ],
            "word": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "pictionary_update_column": {},
        "pictionary_updates": {
            "_append": [
                12
            ],
            "_delete_at_path": [
                15
            ],
            "_delete_elem": [
                16
            ],
            "_delete_key": [
                17
            ],
            "_prepend": [
                25
            ],
            "_set": [
                27
            ],
            "where": [
                13
            ],
            "__typename": [
                2
            ]
        },
        "trivia_type": {
            "value": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "trivia_type_aggregate": {
            "aggregate": [
                34
            ],
            "nodes": [
                32
            ],
            "__typename": [
                2
            ]
        },
        "trivia_type_aggregate_fields": {
            "count": [
                1,
                {
                    "columns": [
                        44,
                        "[trivia_type_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                38
            ],
            "min": [
                39
            ],
            "__typename": [
                2
            ]
        },
        "trivia_type_bool_exp": {
            "_and": [
                35
            ],
            "_not": [
                35
            ],
            "_or": [
                35
            ],
            "value": [
                3
            ],
            "__typename": [
                2
            ]
        },
        "trivia_type_constraint": {},
        "trivia_type_insert_input": {
            "value": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "trivia_type_max_fields": {
            "value": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "trivia_type_min_fields": {
            "value": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "trivia_type_mutation_response": {
            "affected_rows": [
                1
            ],
            "returning": [
                32
            ],
            "__typename": [
                2
            ]
        },
        "trivia_type_on_conflict": {
            "constraint": [
                36
            ],
            "update_columns": [
                48
            ],
            "where": [
                35
            ],
            "__typename": [
                2
            ]
        },
        "trivia_type_order_by": {
            "value": [
                8
            ],
            "__typename": [
                2
            ]
        },
        "trivia_type_pk_columns_input": {
            "value": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "trivia_type_select_column": {},
        "trivia_type_set_input": {
            "value": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "trivia_type_stream_cursor_input": {
            "initial_value": [
                47
            ],
            "ordering": [
                4
            ],
            "__typename": [
                2
            ]
        },
        "trivia_type_stream_cursor_value_input": {
            "value": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "trivia_type_update_column": {},
        "trivia_type_updates": {
            "_set": [
                45
            ],
            "where": [
                35
            ],
            "__typename": [
                2
            ]
        },
        "Query": {
            "pictionary": [
                9,
                {
                    "distinct_on": [
                        26,
                        "[pictionary_select_column!]"
                    ],
                    "limit": [
                        1
                    ],
                    "offset": [
                        1
                    ],
                    "order_by": [
                        23,
                        "[pictionary_order_by!]"
                    ],
                    "where": [
                        13
                    ]
                }
            ],
            "pictionary_aggregate": [
                10,
                {
                    "distinct_on": [
                        26,
                        "[pictionary_select_column!]"
                    ],
                    "limit": [
                        1
                    ],
                    "offset": [
                        1
                    ],
                    "order_by": [
                        23,
                        "[pictionary_order_by!]"
                    ],
                    "where": [
                        13
                    ]
                }
            ],
            "pictionary_by_pk": [
                9,
                {
                    "word": [
                        2,
                        "String!"
                    ]
                }
            ],
            "trivia_type": [
                32,
                {
                    "distinct_on": [
                        44,
                        "[trivia_type_select_column!]"
                    ],
                    "limit": [
                        1
                    ],
                    "offset": [
                        1
                    ],
                    "order_by": [
                        42,
                        "[trivia_type_order_by!]"
                    ],
                    "where": [
                        35
                    ]
                }
            ],
            "trivia_type_aggregate": [
                33,
                {
                    "distinct_on": [
                        44,
                        "[trivia_type_select_column!]"
                    ],
                    "limit": [
                        1
                    ],
                    "offset": [
                        1
                    ],
                    "order_by": [
                        42,
                        "[trivia_type_order_by!]"
                    ],
                    "where": [
                        35
                    ]
                }
            ],
            "trivia_type_by_pk": [
                32,
                {
                    "value": [
                        2,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                2
            ]
        },
        "Mutation": {
            "delete_pictionary": [
                21,
                {
                    "where": [
                        13,
                        "pictionary_bool_exp!"
                    ]
                }
            ],
            "delete_pictionary_by_pk": [
                9,
                {
                    "word": [
                        2,
                        "String!"
                    ]
                }
            ],
            "delete_trivia_type": [
                40,
                {
                    "where": [
                        35,
                        "trivia_type_bool_exp!"
                    ]
                }
            ],
            "delete_trivia_type_by_pk": [
                32,
                {
                    "value": [
                        2,
                        "String!"
                    ]
                }
            ],
            "insert_pictionary": [
                21,
                {
                    "objects": [
                        18,
                        "[pictionary_insert_input!]!"
                    ],
                    "on_conflict": [
                        22
                    ]
                }
            ],
            "insert_pictionary_one": [
                9,
                {
                    "object": [
                        18,
                        "pictionary_insert_input!"
                    ],
                    "on_conflict": [
                        22
                    ]
                }
            ],
            "insert_trivia_type": [
                40,
                {
                    "objects": [
                        37,
                        "[trivia_type_insert_input!]!"
                    ],
                    "on_conflict": [
                        41
                    ]
                }
            ],
            "insert_trivia_type_one": [
                32,
                {
                    "object": [
                        37,
                        "trivia_type_insert_input!"
                    ],
                    "on_conflict": [
                        41
                    ]
                }
            ],
            "update_pictionary": [
                21,
                {
                    "_append": [
                        12
                    ],
                    "_delete_at_path": [
                        15
                    ],
                    "_delete_elem": [
                        16
                    ],
                    "_delete_key": [
                        17
                    ],
                    "_prepend": [
                        25
                    ],
                    "_set": [
                        27
                    ],
                    "where": [
                        13,
                        "pictionary_bool_exp!"
                    ]
                }
            ],
            "update_pictionary_by_pk": [
                9,
                {
                    "_append": [
                        12
                    ],
                    "_delete_at_path": [
                        15
                    ],
                    "_delete_elem": [
                        16
                    ],
                    "_delete_key": [
                        17
                    ],
                    "_prepend": [
                        25
                    ],
                    "_set": [
                        27
                    ],
                    "pk_columns": [
                        24,
                        "pictionary_pk_columns_input!"
                    ]
                }
            ],
            "update_pictionary_many": [
                21,
                {
                    "updates": [
                        31,
                        "[pictionary_updates!]!"
                    ]
                }
            ],
            "update_trivia_type": [
                40,
                {
                    "_set": [
                        45
                    ],
                    "where": [
                        35,
                        "trivia_type_bool_exp!"
                    ]
                }
            ],
            "update_trivia_type_by_pk": [
                32,
                {
                    "_set": [
                        45
                    ],
                    "pk_columns": [
                        43,
                        "trivia_type_pk_columns_input!"
                    ]
                }
            ],
            "update_trivia_type_many": [
                40,
                {
                    "updates": [
                        49,
                        "[trivia_type_updates!]!"
                    ]
                }
            ],
            "__typename": [
                2
            ]
        },
        "Subscription": {
            "pictionary": [
                9,
                {
                    "distinct_on": [
                        26,
                        "[pictionary_select_column!]"
                    ],
                    "limit": [
                        1
                    ],
                    "offset": [
                        1
                    ],
                    "order_by": [
                        23,
                        "[pictionary_order_by!]"
                    ],
                    "where": [
                        13
                    ]
                }
            ],
            "pictionary_aggregate": [
                10,
                {
                    "distinct_on": [
                        26,
                        "[pictionary_select_column!]"
                    ],
                    "limit": [
                        1
                    ],
                    "offset": [
                        1
                    ],
                    "order_by": [
                        23,
                        "[pictionary_order_by!]"
                    ],
                    "where": [
                        13
                    ]
                }
            ],
            "pictionary_by_pk": [
                9,
                {
                    "word": [
                        2,
                        "String!"
                    ]
                }
            ],
            "pictionary_stream": [
                9,
                {
                    "batch_size": [
                        1,
                        "Int!"
                    ],
                    "cursor": [
                        28,
                        "[pictionary_stream_cursor_input]!"
                    ],
                    "where": [
                        13
                    ]
                }
            ],
            "trivia_type": [
                32,
                {
                    "distinct_on": [
                        44,
                        "[trivia_type_select_column!]"
                    ],
                    "limit": [
                        1
                    ],
                    "offset": [
                        1
                    ],
                    "order_by": [
                        42,
                        "[trivia_type_order_by!]"
                    ],
                    "where": [
                        35
                    ]
                }
            ],
            "trivia_type_aggregate": [
                33,
                {
                    "distinct_on": [
                        44,
                        "[trivia_type_select_column!]"
                    ],
                    "limit": [
                        1
                    ],
                    "offset": [
                        1
                    ],
                    "order_by": [
                        42,
                        "[trivia_type_order_by!]"
                    ],
                    "where": [
                        35
                    ]
                }
            ],
            "trivia_type_by_pk": [
                32,
                {
                    "value": [
                        2,
                        "String!"
                    ]
                }
            ],
            "trivia_type_stream": [
                32,
                {
                    "batch_size": [
                        1,
                        "Int!"
                    ],
                    "cursor": [
                        46,
                        "[trivia_type_stream_cursor_input]!"
                    ],
                    "where": [
                        35
                    ]
                }
            ],
            "__typename": [
                2
            ]
        }
    }
}