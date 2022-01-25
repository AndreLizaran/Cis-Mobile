// Modules
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

// Styles
import generalStyles from '../styles/general';

// Colors
import { normalBlue, normalGreen, normalRed } from '../utils/colors';

// Hooks
import {
  useGetConferencias,
  useGetCursos,
  useGetTalleres,
} from '../hooks/useGetDates';

// Types
import { DateType } from '../endpoints/general';

export default function Dates() {
  //
  const {
    isLoading: isLoadingTalleres,
    isFetching: isFetchingTalleres,
    data: dataTalleres,
    isSuccess: isSuccessTalleres,
  } = useGetTalleres();

  const {
    isLoading: isLoadingConferencias,
    isFetching: isFetchingConferencias,
    data: dataConferencias,
    isSuccess: isSuccessConferencias,
  } = useGetConferencias();

  const {
    isLoading: isLoadingCursos,
    isFetching: isFetchingCursos,
    data: dataCursos,
    isSuccess: isSuccessCursos,
  } = useGetCursos();

  return (
    <ScrollView style={generalStyles.container}>
      <DatesContainer
        headerColor={normalRed}
        title='Talleres'
        icon='pencil-sharp'
        isLoading={isLoadingTalleres}
        isFetching={isFetchingTalleres}
        data={dataTalleres?.data.talleres}
      />
      <DatesContainer
        headerColor={normalBlue}
        title='Conferencias'
        icon='megaphone'
        isLoading={isLoadingConferencias}
        isFetching={isFetchingConferencias}
        data={dataConferencias?.data.conferencias}
      />
      <DatesContainer
        headerColor={normalGreen}
        title='Cursos'
        icon='people-circle'
        isLoading={isLoadingCursos}
        isFetching={isFetchingCursos}
        data={dataCursos?.data.cursos}
      />
    </ScrollView>
  );
}

type DatesContainerProps = {
  headerColor: string;
  title: string;
  icon: string;
  isLoading: boolean;
  isFetching: boolean;
  data: DateType | undefined;
};

function DatesContainer({
  headerColor,
  title,
  icon,
  isLoading,
  isFetching,
  data,
}: DatesContainerProps) {
  return (
    <View style={{ width: '100%', marginBottom: 20, borderRadius: 5 }}>
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 15,
          backgroundColor: headerColor,
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
          {title}
        </Text>
        {/* @ts-ignore */}
        <Ionicons name={icon} size={24} color='white' />
      </View>
      <View style={{ ...generalStyles.generalBody }}>
        <ContainerInformation
          color={headerColor}
          isFetching={isFetching}
          isLoading={isLoading}
          data={data}
        />
      </View>
    </View>
  );
}

type NoDatesProps = {
  color: string;
};

export function NoDates({ color }: NoDatesProps) {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: color,
      }}
    >
      <Text style={{ fontSize: 16, color, fontWeight: 'bold', textAlign: 'center' }}>
        No hay fechas próximas
      </Text>
    </View>
  );
}

type LoadingDataProps = {
  color: string;
};

export function LoadingData({ color }: LoadingDataProps) {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: color,
      }}
    >
      <Text style={{ fontSize: 16, color, fontWeight: 'bold', textAlign: 'center' }}>
        Cargando información
      </Text>
    </View>
  );
}

type ListDatesInformationProps = {
  data: DateType;
  color: string;
};

export function ListDatesInformation({ data, color }: ListDatesInformationProps) {
  return (
    <ScrollView style={{ maxHeight: 200 }} nestedScrollEnabled={true}>
      {data.map(
        (
          {
            id,
            title,
            responsableImage,
            responsableName,
            textColor,
            length,
            day,
            hour,
            bgImage,
          },
          index
        ) => (
          <View
            style={{
              alignItems: 'center',
              backgroundColor: 'white',
              borderRadius: 5,
              marginBottom: data.length === index + 1 ? 0 : 20,
            }}
            key={id}
          >
            <Image
              source={{
                uri: bgImage,
              }}
              style={{
                zIndex: 1,
                width: '100%',
                height: 150,
                position: 'absolute',
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
              }}
            />
            <Image
              source={{ uri: responsableImage }}
              style={{
                width: 80,
                height: 80,
                borderRadius: 100,
                marginVertical: 10,
                borderWidth: 2,
                borderColor: color,
                zIndex: 2,
              }}
            />
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                zIndex: 2,
                color: textColor,
              }}
            >
              {title}
            </Text>
            <Text style={{ marginBottom: 10, zIndex: 2, color: textColor }}>
              {responsableName}
            </Text>

            <View
              style={{ padding: 20, backgroundColor: 'white', alignItems: 'center' }}
            >
              <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                <View
                  style={{
                    borderRadius: 5,
                    borderWidth: 2,
                    borderColor: color,
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginRight: 5,
                  }}
                >
                  <FontAwesome5 name='calendar-alt' size={20} color={color} />
                  <Text style={{ fontWeight: 'bold', color, marginLeft: 10 }}>
                    {day}
                  </Text>
                </View>
                <View
                  style={{
                    borderRadius: 5,
                    borderWidth: 2,
                    borderColor: color,
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginLeft: 5,
                  }}
                >
                  <AntDesign name='clockcircle' size={20} color={color} />
                  <Text style={{ fontWeight: 'bold', color, marginLeft: 10 }}>
                    {hour}
                  </Text>
                </View>
              </View>
              <View>
                <View
                  style={{
                    borderRadius: 5,
                    borderWidth: 2,
                    borderColor: color,
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginRight: 5,
                  }}
                >
                  <Ionicons name='timer-sharp' size={20} color={color} />
                  <Text style={{ fontWeight: 'bold', color, marginLeft: 10 }}>
                    {length} horas
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                style={{
                  paddingVertical: 10,
                  paddingHorizontal: 10,
                  borderRadius: 5,
                  backgroundColor: color,
                  marginTop: 10,
                }}
              >
                <Text style={{ fontWeight: 'bold', color: 'white' }}>
                  Registrarse
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )
      )}
    </ScrollView>
  );
}

type ContainerInformationProps = {
  isLoading: boolean;
  isFetching: boolean;
  color: string;
  data: DateType | undefined;
};

export function ContainerInformation({
  isLoading,
  isFetching,
  data,
  color,
}: ContainerInformationProps) {
  if (isLoading || isFetching) {
    return <LoadingData color={color} />;
  } else if (!isLoading && !isFetching && data) {
    return <ListDatesInformation data={data} color={color} />;
  } else if (!isLoading && !isFetching && !data) {
    return <NoDates color={color} />;
  } else return <></>;
}
