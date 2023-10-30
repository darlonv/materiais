FROM ubuntu AS base

RUN apt update -qq
RUN apt -qq -y install wget openssh-server
RUN apt -qq -y install vim net-tools

RUN touch /run/utmp
RUN chown root:utmp /run/utmp; chmod g+w /run/utmp

RUN service ssh start

EXPOSE 2222
CMD ["/usr/sbin/sshd","-D"]


FROM darlon/ssh_base:latest AS ssh

ADD add_users.sh /
RUN /add_users.sh

EXPOSE 2222
CMD ["/usr/sbin/sshd","-D"]
