import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    cs0: {
                        table: 'sys_script_client'
                        id: 'dd6186c9bfb749ddb6b7a74563140f38'
                    }
                    src_server_script_ts: {
                        table: 'sys_module'
                        id: 'a61121ca25ca4eb9b290c5927d6d9040'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '4abad67f26bc48538d18e3fe0b585e0c'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '83827461e13345e4a46e75e81be4cdcb'
                    }
                }
            }
        }
    }
}
