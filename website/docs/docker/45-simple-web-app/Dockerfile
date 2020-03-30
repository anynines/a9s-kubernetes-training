FROM golang:1.13

# RUN apk add --update \
#   git

WORKDIR /go/src/app

COPY . .

RUN go get -u github.com/kataras/iris

# https://golang.org/cmd/cgo/
RUN CGO_ENABLED=0 go build -a main.go

CMD ./main