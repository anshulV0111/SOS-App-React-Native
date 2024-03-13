import React, { memo } from 'react'
import AppLoader from '@/Components/Ui-Kit/AppLoader'
import NoRecordsFound from '@/Components/layouts/NoRecordsFound'
import { SafeAreaView, FlatList, RefreshControl, View, ActivityIndicator } from 'react-native'
import { useTheme } from 'native-base'

const PaginationList = memo(({ listData, renderItem, loadMore, keyExtractor, isLoading, refreshList, refresh, isFetching }) => {
  const { colors } = useTheme()

  const renderFooter = () => {
    return (
      <View style={{
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
      }}
      >
        {isFetching
          ? (
            <ActivityIndicator color={colors.primaryBlue} style={{ margin: 15 }} size='large' />
            )
          : <></>}
      </View>
    )
  }

  return (
    <SafeAreaView>
      {
        isLoading
          ? (<AppLoader loading={isLoading} />)
          : (
              listData.length
                ? (
                  <>
                    <FlatList
                      keyExtractor={keyExtractor}
                      data={listData}
                      renderItem={renderItem}
                      onEndReachedThreshold={0.5}
                      onEndReached={loadMore}
                      ListFooterComponent={renderFooter}
                      refreshControl={
                        <RefreshControl
                          refreshing={refresh}
                          onRefresh={refreshList}
                          progressViewOffset={100}
                        />
                }
                    />
                  </>
                  )
                : (
                  <NoRecordsFound />
                  )
            )
      }
    </SafeAreaView>
  )
})

export default PaginationList
