// Code generated by protoc-gen-go. DO NOT EDIT.
// source: query_coordv2.proto

package querypbv2

import (
	context "context"
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	grpc "google.golang.org/grpc"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

func init() { proto.RegisterFile("query_coordv2.proto", fileDescriptor_06e29c474dd8c71e) }

var fileDescriptor_06e29c474dd8c71e = []byte{
	// 131 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x12, 0x2e, 0x2c, 0x4d, 0x2d,
	0xaa, 0x8c, 0x4f, 0xce, 0xcf, 0x2f, 0x4a, 0x29, 0x33, 0xd2, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17,
	0x12, 0xc9, 0xcd, 0xcc, 0x29, 0x2b, 0x2d, 0x86, 0xf0, 0xf4, 0xc0, 0x2a, 0xca, 0x8c, 0x8c, 0xf8,
	0xb8, 0x78, 0x02, 0x41, 0x4c, 0x67, 0x90, 0xda, 0x30, 0x23, 0x27, 0xbb, 0x28, 0x9b, 0xf4, 0xcc,
	0x92, 0x8c, 0xd2, 0x24, 0xbd, 0xe4, 0xfc, 0x5c, 0xfd, 0xaa, 0xcc, 0x9c, 0x9c, 0xcc, 0xaa, 0x92,
	0xd4, 0xe4, 0x0c, 0x7d, 0x88, 0x6e, 0xdd, 0xa4, 0xc4, 0xe4, 0xec, 0xd2, 0x02, 0xfd, 0xcc, 0xbc,
	0x92, 0xd4, 0xa2, 0xbc, 0xc4, 0x1c, 0x7d, 0xb0, 0x69, 0xfa, 0x60, 0xd3, 0x0a, 0x92, 0xca, 0x8c,
	0x92, 0xd8, 0xc0, 0x02, 0xc6, 0x80, 0x00, 0x00, 0x00, 0xff, 0xff, 0x2a, 0x22, 0x13, 0x56, 0x83,
	0x00, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// QueryCoordV2Client is the client API for QueryCoordV2 service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type QueryCoordV2Client interface {
}

type queryCoordV2Client struct {
	cc *grpc.ClientConn
}

func NewQueryCoordV2Client(cc *grpc.ClientConn) QueryCoordV2Client {
	return &queryCoordV2Client{cc}
}

// QueryCoordV2Server is the server API for QueryCoordV2 service.
type QueryCoordV2Server interface {
}

// UnimplementedQueryCoordV2Server can be embedded to have forward compatible implementations.
type UnimplementedQueryCoordV2Server struct {
}

func RegisterQueryCoordV2Server(s *grpc.Server, srv QueryCoordV2Server) {
	s.RegisterService(&_QueryCoordV2_serviceDesc, srv)
}

var _QueryCoordV2_serviceDesc = grpc.ServiceDesc{
	ServiceName: "milvus.proto.queryv2.QueryCoordV2",
	HandlerType: (*QueryCoordV2Server)(nil),
	Methods:     []grpc.MethodDesc{},
	Streams:     []grpc.StreamDesc{},
	Metadata:    "query_coordv2.proto",
}
